# Generated by Django 3.2.4 on 2021-06-17 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('visualizer', '0023_homepagefeaturedelection_homepagefeaturedelectioncolumn'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jsonconfig',
            name='doHideInactiveBallotsAndResidualSurplus',
        ),
    ]
