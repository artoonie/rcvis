"""Testing background tasks for visualizer module"""

from django.core.files import File

from visualizer.models import JsonConfig
from visualizer.tasks import generate_json_config_title_image
from visualizer.tests import filenames, liveServerTestBaseClass


class TaskTests(liveServerTestBaseClass.LiveServerTestBaseClass):
    """Tests for validating tasks"""

    def test_title_image_generation(self):
        """Verify that an image is saved as the config title image"""
        with open(filenames.MULTIWINNER, "r", encoding="utf-8") as f:
            jsonConfig = JsonConfig.objects.create(jsonFile=File(f), title='x',
                                                   numRounds=1,
                                                   numCandidates=1)
            jsonConfig.save()

        self.assertIsNone(jsonConfig.titleImage.name)
        generate_json_config_title_image(jsonConfig.pk, "http://localhost:8000")

        jsonConfig.refresh_from_db()
        self.assertIsNotNone(jsonConfig.titleImage.name)
