# Generated by Django 3.2.23 on 2024-01-25 23:34

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('Socially', '0023_auto_20240126_0504'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='published_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2024, 1, 25, 23, 34, 49, 254032, tzinfo=utc), null=True),
        ),
    ]
