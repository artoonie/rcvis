""" Celery configuration. """

import os

# Broker settings.
broker_url = 'sqs://'  # pylint: disable=invalid-name

# List of modules to import when the Celery worker starts.
imports = ('movie.tasks',)

# No backend - we don't care about the results, we'll update the database
result_backend = None  # pylint: disable=invalid-name

task_annotations = {
    'tasks.create_movie_task': {'rate_limit': '1/s'}
}

sqs_queue_name = os.environ.get('SQS_QUEUE_NAME')
if not sqs_queue_name:
    # Otherwise we get a cryptic error message
    raise NotImplementedError("No queue name set. Set SQS_QUEUE_NAME.")

broker_transport_options = {
    'queue_name_prefix': sqs_queue_name
}

# At most one process at once - can later be scaled as needed, but for now,
# too many workers were spawned (seemingly ncores+1 despite requesting just ncores?)
celeryd_concurrency = 1  # pylint: disable=invalid-name
