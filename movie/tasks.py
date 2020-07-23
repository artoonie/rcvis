"""
Long-running tasks, to be run asynchronously with Amazon SQS or another queue
"""

from celery import shared_task
from selenium import webdriver

from movie.creation.movieCreator import MovieCreationFactory
from visualizer.models import JsonConfig, MovieGenerationStatuses


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
