# Generated by Django 3.1.7 on 2022-12-16 18:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_enquiry'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enquiry',
            name='phone',
            field=models.CharField(blank=True, max_length=12, null=True, validators=[django.core.validators.RegexValidator(message='Phone number must be entered in the format: 07123456789', regex='/[0-9]{11,}/')]),
        ),
    ]
