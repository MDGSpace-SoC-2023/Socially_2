# Generated by Django 3.2.23 on 2024-01-28 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0003_alter_userchoices_enrollment_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userchoices',
            name='username',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
