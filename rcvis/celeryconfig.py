""" Celery configuration. """

## Broker settings.
broker_url = 'sqs://'  # pylint: disable=invalid-name

# List of modules to import when the Celery worker starts.
imports = ('visualizer.tasks',)

## No backend - we don't care about the results, we'll update the database
result_backend = None  # pylint: disable=invalid-name

task_annotations = {'tasks.create_movie': {'rate_limit': '1/s'}}
