# Generated by Django 3.0.8 on 2020-07-23 16:03

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id',
                 models.AutoField(
                     auto_created=True,
                     primary_key=True,
                     serialize=False,
                     verbose_name='ID')),
                ('generatedOnApplicationVersion',
                 models.CharField(
                     max_length=30)),
                ('movieFile',
                 models.FileField(
                     upload_to='movies')),
                ('resolutionWidth',
                 models.PositiveIntegerField(
                     validators=[
                         django.core.validators.MinValueValidator(1),
                         django.core.validators.MaxValueValidator(1920)])),
                ('resolutionHeight',
                 models.PositiveIntegerField(
                     validators=[
                         django.core.validators.MinValueValidator(1),
                         django.core.validators.MaxValueValidator(1920)])),
            ],
        ),
    ]