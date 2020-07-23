"""
Long-running tasks, to be run asynchronously with Amazon SQS or another queue
"""

from celery import shared_task
from selenium import webdriver

from visualizer.models import JsonConfig
from visualizer.movie.movieCreator import MovieCreationFactory


@shared_task
def create_movie(pk, domain):
    """ Create a movie for the config with the given primary key, using
        a live server at the given domain """

    chromeOptions = webdriver.chrome.options.Options()
    chromeOptions.add_argument("--headless")
    chromeOptions.add_argument("--disable-dev-shm-usage")
    chromeOptions.add_argument("--shm-size=512m")

    browser = webdriver.Chrome('/usr/bin/chromedriver', options=chromeOptions)
    browser.implicitly_wait(10)

    try:
        jsonconfig = JsonConfig.objects.get(pk=pk)  # pylint: disable=no-member
        _make_movies_for_config(browser, domain, jsonconfig)
    finally:
        browser.quit()


def _make_movies_for_config(browser, domain, jsonconfig):
    """ Create a movie, this time given a JsonConfig and selenium browser """
    movieCreator = MovieCreationFactory(browser, domain, jsonconfig)
    horizontal = movieCreator.make_one_movie_at_resolution(1920, 1080)
    vertical = movieCreator.make_one_movie_at_resolution(1080, 1920)

    jsonconfig.movieHorizontal = horizontal
    jsonconfig.movieVertical = vertical
    jsonconfig.isVideoGenerationInProgress = False
    jsonconfig.save()
