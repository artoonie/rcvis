"""
Long-running tasks, to be run asynchronously with Amazon SQS or another queue
"""

import tempfile
import time

from celery import shared_task
from django.core.files import File
from django.urls import reverse
from moviepy.editor import ImageClip, concatenate_videoclips
from selenium import webdriver

from visualizer.models import AutoMovie, JsonConfig


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

    jsonconfig = JsonConfig.objects.get(pk=pk)  # pylint: disable=no-member
    _make_movies_for_config(browser, domain, jsonconfig)

    browser.quit()


def _make_movies_for_config(browser, domain, jsonconfig):
    """ Create a movie, this time given a JsonConfig and selenium browser """
    horizontal = _make_one_movie_at_resolution(browser, domain, jsonconfig, 1920, 1080)
    vertical = _make_one_movie_at_resolution(browser, domain, jsonconfig, 1080, 1920)

    jsonconfig.movieHorizontal = horizontal
    jsonconfig.movieVertical = vertical
    jsonconfig.isVideoGenerationInProgress = False
    jsonconfig.save()


def _make_one_movie_at_resolution(browser, domain, jsonconfig, width, height):
    """ Create a movie at a specific resolution """
    url = reverse('movieGenerationView', args=(jsonconfig.slug,))

    browser.get("%s%s" % (domain, url))
    browser.set_window_size(width, height)

    imageClips = []
    #imageClips.append(TextClip("RCV RULES"))

    for i in range(1, 5 + 1):
        browser.execute_script(f'transitionEachBarForRound({i});')
        time.sleep(0.2)

        screenshotFilepath = f'/tmp/test-screenshot-{i}.png'
        browser.save_screenshot(screenshotFilepath)

        imageClip = ImageClip(screenshotFilepath, duration=1)
        imageClips.append(imageClip)

    with tempfile.NamedTemporaryFile(suffix=".mp4") as tempFile:
        composite = concatenate_videoclips(imageClips)
        composite.write_videofile(tempFile.name, fps=12)
        recommendedFilename = jsonconfig.slug + ".mp4"

        movie = AutoMovie()
        movie.resolutionWidth = width
        movie.resolutionHeight = height
        movie.generatedOnApplicationVersion = "TODO"
        movie.movieFile.save(recommendedFilename, File(tempFile))
        movie.save()

    return movie
