"""
Support for managing a ProcessPoolExecutor for running non-critical tasks outside of
requests on web servers
"""

import atexit
import multiprocessing
import os
import threading
from concurrent.futures import ProcessPoolExecutor

# pylint: disable=invalid-name
_executor = None
_executor_lock = threading.Lock()
_pid = None


# pylint: disable=import-outside-toplevel
def init_django_logging():
    """Initialize Django logging in each worker process"""
    import logging.config

    import django
    from django.conf import settings

    django.setup()
    logging.config.dictConfig(settings.LOGGING)


def get_executor():
    """Get or create process pool executor, managing locks and shutdowns"""
    global _executor, _pid  # pylint: disable=global-statement
    current_pid = os.getpid()

    # Recreate if process forked
    if _executor is not None and _pid != current_pid:
        _executor = None

    if _executor is None:
        with _executor_lock:
            if _executor is None:
                ctx = multiprocessing.get_context('spawn')
                _executor = ProcessPoolExecutor(
                    max_workers=min(2, multiprocessing.cpu_count()),
                    mp_context=ctx,
                    initializer=init_django_logging
                )
                _pid = current_pid
                atexit.register(_executor.shutdown, wait=True)

    return _executor
