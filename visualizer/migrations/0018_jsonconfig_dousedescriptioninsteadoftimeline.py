# Generated by Django 3.0.8 on 2021-01-28 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualizer', '0017_auto_20210103_0748'),
    ]

    operations = [
        migrations.AddField(
            model_name='jsonconfig',
            name='doUseDescriptionInsteadOfTimeline',
            field=models.BooleanField(default=True),
        ),
    ]
