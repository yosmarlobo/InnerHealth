# Generated by Django 4.0.3 on 2022-03-01 21:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Is active')),
                ('created', models.DateField(auto_now=True, verbose_name='Created')),
                ('updated', models.DateField(auto_now=True, verbose_name='Updated')),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='authentication.user', verbose_name='Updated By')),
                ('updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='authentication.user', verbose_name='Updated By')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.user', verbose_name='User')),
            ],
            options={
                'verbose_name': 'Profile Abstract Class',
            },
        ),
    ]