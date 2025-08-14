"""Background tasks for visualizer module"""

import os
import tempfile
import time


# pylint: disable=import-outside-toplevel
def create_headless_browser():
    """Create a browser with internal imports for use in process pool executor"""
    from selenium import webdriver
    from selenium.webdriver.chrome.service import Service as ChromeService

    chromeOptions = webdriver.ChromeOptions()
    for arg in [
        "--headless",
        "--disable-dev-shm-usage",
        "--shm-size=512m",
        "--no-sandbox"
    ]:
        chromeOptions.add_argument(arg)

    chromedriverPath = os.getenv('CHROMEDRIVER_PATH')
    if chromedriverPath:
        chromeOptions.add_argument("--remote-debugging-port=9222")
        return webdriver.Chrome(
            service=ChromeService(
                executable_path=chromedriverPath),
            options=chromeOptions)
    return webdriver.Chrome(options=chromeOptions)


def generate_json_config_title_image(pk, domain):
    """Use headless Chrome to generate a title image for a JsonConfig object"""
    import django
    django.setup()

    from django.core.files import File
    from django.urls import reverse

    from visualizer.models import JsonConfig

    browser = create_headless_browser()

    try:
        browser.implicitly_wait(10)
        jsonconfig = JsonConfig.objects.get(pk=pk)

        path = reverse('visualizeEmbedded', args=(jsonconfig.slug,))
        browser.get(f"{domain}{path}")
        # Hide scrollbar so that it doesn't show in screenshots
        browser.execute_script("""
            document.getElementById('embedded-content').style.overflow = 'hidden';
        """)

        # Not ideal, but to avoid getting in the JS too much and because we're off the
        # main thread we're sleeping to wait for any transitions to complete
        time.sleep(1.5)

        with tempfile.NamedTemporaryFile(suffix=".png") as tf:
            browser.save_screenshot(tf.name)
            tfName = jsonconfig.titleImage.storage.get_alternative_name(
                file_root=jsonconfig.slug, file_ext=".png")
            jsonconfig.titleImage.save(tfName, File(tf))
            jsonconfig.save()
    finally:
        browser.quit()
