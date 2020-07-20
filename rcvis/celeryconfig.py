""" Celery configuration. """

import os

## Broker settings.
broker_url = 'sqs://'  # pylint: disable=invalid-name

# List of modules to import when the Celery worker starts.
imports = ('visualizer.tasks',)

# File-based backend - won't work in the general case, but works for local testing
result_backend = 'file:///var/celery/results' # pylint: disable=invalid-name

task_annotations = {'tasks.create_movie': {'rate_limit': '1/s'}}

sqs_queue_name = os.environ['SQS_QUEUE_NAME']
if not sqs_queue_name:
    # Otherwise we get a cryptic error message
    raise Exception("No queue name set. Set SQS_QUEUE_NAME.")

broker_transport_options = {
    'queue_name_prefix': sqs_queue_name
}
