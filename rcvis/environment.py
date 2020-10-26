"""
Grabbing secrets and configs from environment variables and/or AWS Secrets manager
"""

import base64
import json
import os
import random
import string

import boto3

class Environment:
    """
    Retrieves secrets and configurations stored in environment variables or on AWS Secrets Manager
    """

    def __init__(self):
        rdsSecretsName = os.environ.get('SECRETS_MANAGER_RDS_SECRETS')
        envSecretsName = os.environ.get('SECRETS_MANAGER_ENV_SECRETS')

        self._rdsSecrets = self._get_secrets_from_aws(rdsSecretsName) if rdsSecretsName else {}
        self._envSecrets = self._get_secrets_from_aws(envSecretsName) if envSecretsName else {}

    def _get_secret(self, secretName, default=None):
        """ Looks for the secret first in AWS, then in the environment, then by the default """
        if secretName in self._envSecrets:
            return self._envSecrets[secretName]
        if secretName in os.environ:
            return os.environ[secretName]
        if default:
            return default
        raise KeyError(f'Could not find secret value for {secretName} and no default provided.')

    def _get_secrets_from_aws(self, secretName):
        """ Gets the given group of secrets from AWS Secrets Manager """
        # Create a Secrets Manager client
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=self.get_region()
        )

        secretValue = client.get_secret_value(SecretId=secretName)

        # Decrypts secret using the associated KMS CMK.
        # Depending on whether the secret is a string or binary, one of these will be return.
        if 'SecretString' in secretValue:
            return json.loads(secretValue['SecretString'])
        return base64.b64decode(secretValue['SecretBinary'])

    ########################
    # Get from environment #
    ########################

    @classmethod
    def get_debug(cls):
        """ Debug mode? Security warning: must be off in production. False by default. """
        return os.environ.get('RCVIS_DEBUG') == 'True'

    @classmethod
    def get_region(cls):
        """ Region? us-west-2 (Oregon) by default """
        return os.environ.get('AWS_S3_REGION_NAME', 'us-west-2')

    @classmethod
    def get_offline_mode(cls):
        """ Offline mode? False by default. """
        return os.environ.get('OFFLINE_MODE', False)

    @classmethod
    def get_access_key_id(cls):
        """ Gets the AWS access key ID from the environment """
        return os.environ.get('AWS_ACCESS_KEY_ID')

    @classmethod
    def get_secret_access_key(cls):
        """ Gets the AWS secret access key from the environment """
        return os.environ.get('AWS_SECRET_ACCESS_KEY')

    #######################################
    # Get from aws secrets only           #
    #######################################
    def get_rds_dbname(self):
        """ Gets the dbname from the RDS credentials - if called, must be present. """
        return self._rdsSecrets['dbname']

    def get_rds_username(self):
        """ Gets the username from the RDS credentials - if called, must be present. """
        return self._rdsSecrets['username']

    def get_rds_password(self):
        """ Gets the password from the RDS credentials - if called, must be present. """
        return self._rdsSecrets['password']

    def get_rds_host(self):
        """ Gets the host from the RDS credentials - if called, must be present. """
        return self._rdsSecrets['host']

    def get_rds_port(self):
        """ Gets the port from the RDS credentials - if called, must be present. """
        return self._rdsSecrets['port']

    #######################################
    # Get from aws secrets OR environment #
    #######################################

    def get_storage_bucket_name(self):
        """ AWS storage bucket name """
        return self._get_secret('AWS_STORAGE_BUCKET_NAME')

    def get_host(self):
        """ Host name """
        return self._get_secret('RCVIS_HOST', 'localhost')

    def get_secret_key(self):
        """
        Secret key.
        SECURITY WARNING: keep the secret key used in production secret!
        A random default key if none is provided (should not be used in production)
        """
        defaultKey = ''.join(random.choices(string.ascii_uppercase + string.digits, k=16))
        return self._get_secret('RCVIS_SECRET_KEY', defaultKey)

    def get_sqs_queue_name(self):
        """
        SQS queue name for celery communication
        """
        return self._get_secret('SQS_QUEUE_NAME')


environment = Environment()
