# Generated by Django 4.1.7 on 2023-02-15 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earlkit', '0003_alter_earlkit_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='earlkit',
            name='img',
            field=models.ImageField(max_length=256, upload_to='public/images/'),
        ),
        migrations.AlterField(
            model_name='earlkit',
            name='tags',
            field=models.TextField(default='', help_text='please seperate all tags with a colon (ex tag1 : tag2)'),
        ),
    ]
