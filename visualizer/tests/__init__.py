"""
Because we're not using a single base tests across all classes and the upload form that
triggers submitting to the executor is called in many places, we're hacking it across
tests so that we aren't spinning up subprocesses on every call
"""

from unittest.mock import MagicMock, patch

executor_mock = MagicMock()

patcher = patch("visualizer.executor.get_executor", MagicMock(return_value=executor_mock))
patcher.start()
