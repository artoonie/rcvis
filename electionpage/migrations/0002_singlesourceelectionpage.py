# Generated by Django 3.2.16 on 2022-11-08 02:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0002_multiscraper'),
        ('electionpage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SingleSourceElectionPage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('description', models.TextField(max_length=2048)),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('date', models.DateField()),
                ('areResultsCertified', models.BooleanField(default=False)),
                ('scraper', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='scraper.multiscraper')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
