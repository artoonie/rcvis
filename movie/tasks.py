"""
Long-running tasks, to be run asynchronously with Amazon SQS or another queue
"""

import os
import traceback

from celery import shared_task
from django.conf import settings
import requests
from selenium import webdriver

from movie.creation.movieCreator import MovieCreationFactory
from visualizer.models import JsonConfig, MovieGenerationStatuses


def launch_big_dynos(pk, domain):
    """ Creates a heroku worker that has enough memory to process a video """
    if settings.HEROKU_API_KEY:
        print(f"Launching a new, bigger dyno of size {settings.HEROKU_WORKER_DYNO_TYPE}")
        headers = {
            "Authorization": f"Bearer {settings.HEROKU_API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/vnd.heroku+json; version=3"
        }
        data = {
            "attach": False,
            "command": "celery -A rcvis worker --loglevel info",
            "size": settings.HEROKU_WORKER_DYNO_TYPE,
            "type": "moviegen",
            "time_to_live": 600
        }
        url = f"https://api.heroku.com/apps/{settings.HEROKU_APP_NAME}/dynos"
        response = requests.post(url, json=data, headers=headers)
        if response.json().get('state') != 'starting':
            jsonconfig = JsonConfig.objects.get(pk=pk)
            jsonconfig.movieGenerationStatus = MovieGenerationStatuses.FAILED
            jsonconfig.save()
            print("Could not launch dyno:", response.json())
            return
    else:
        print("Not launching new dynos. Assuming Celery is running somewhere already.")

    create_movie_task.delay(pk, domain)


def create_movie_task(pk, domain):
    """ Create a movie for the config with the given primary key, using
        a live server at the given domain. Turned into a @shared_task below,
        but doesn't work in readthedocs so it's conditional. """

    chromeOptions = webdriver.chrome.options.Options()
    chromeOptions.add_argument("--headless")
    chromeOptions.add_argument("--disable-dev-shm-usage")
    chromeOptions.add_argument("--shm-size=512m")

    browser = webdriver.Chrome(options=chromeOptions)
    browser.implicitly_wait(10)

    try:
        jsonconfig = JsonConfig.objects.get(pk=pk)
        _make_movies_for_config(browser, domain, jsonconfig)
    except BaseException as exception:  # pylint: disable=broad-except
        jsonconfig.movieGenerationStatus = MovieGenerationStatuses.FAILED
        jsonconfig.save()
        print("Movie generation failed: ", exception)
        traceback.print_exc()
    finally:
        browser.quit()


is_read_the_docs_env = os.environ.get('READTHEDOCS') == 'True'
if not is_read_the_docs_env:
    create_movie_task = shared_task(create_movie_task)


def _make_movies_for_config(browser, domain, jsonconfig):
    """ Create a movie, this time given a JsonConfig and selenium browser """
    movieCreator = MovieCreationFactory(browser, domain, jsonconfig)

    jsonconfig.movieGenerationStatus = MovieGenerationStatuses.PICKED_UP_BY_TASK
    jsonconfig.save()

    horizontal = movieCreator.make_one_movie_at_resolution(1280, 720)  # 720p

    jsonconfig.movieGenerationStatus = MovieGenerationStatuses.LANDSCAPE_COMPLETE
    jsonconfig.save()

    vertical = movieCreator.make_one_movie_at_resolution(480, 640)  # 480p

    jsonconfig.movieGenerationStatus = MovieGenerationStatuses.COMPLETE
    jsonconfig.movieHorizontal = horizontal
    jsonconfig.movieVertical = vertical
    jsonconfig.save()
