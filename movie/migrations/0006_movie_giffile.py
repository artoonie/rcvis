# Generated by Django 3.0.8 on 2021-04-15 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0005_movie_titleimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='gifFile',
            field=models.FileField(max_length=512, null=True, upload_to='gifs'),
        ),
    ]