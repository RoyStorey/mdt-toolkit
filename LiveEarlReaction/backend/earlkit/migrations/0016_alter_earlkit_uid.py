# Generated by Django 4.1.7 on 2023-04-14 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0015_alter_earlkit_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='uid',
            field=models.CharField(default='897a347e56114863af0a62819094d09f', editable=False, max_length=15, unique=True),
        ),
    ]
