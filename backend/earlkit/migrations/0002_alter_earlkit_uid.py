# Generated by Django 4.1.7 on 2023-02-15 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.UUIDField(auto_created=True, editable=False),
        ),
    ]
