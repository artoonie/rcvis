# Generated by Django 2.2.3 on 2019-10-05 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualizer', '0003_jsonconfig_dohideoverflowandeliminated'),
    ]

    operations = [
        migrations.AddField(
            model_name='jsonconfig',
            name='doUseHorizontalBarGraph',
            field=models.BooleanField(default=False),
        ),
    ]