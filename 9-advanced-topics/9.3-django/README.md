# 9.3: Django

## Environment Setup

[https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3](https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3)

```text
brew install python
```

```text
pip3 install virtualenvwrapper
```

[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development\_environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)

```text
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/local/bin/python3 '
export PROJECT_HOME=$HOME/code/django-projects
source /usr/local/bin/virtualenvwrapper.sh
```

```text
mkvirtualenv my_django_app
```

```text
echo $VIRTUAL_ENV
```

[https://virtualenvwrapper.readthedocs.io/en/latest/command\_ref.html](https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html)

## Create a Django Project

```text
pip3 install django
```

[https://docs.djangoproject.com/en/3.1/intro/install/](https://docs.djangoproject.com/en/3.1/intro/install/)

```text
django-admin startproject my_ra_django_project
```

```text
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

```text
cd my_ra_django_app
```

```text
python manage.py runserver
```

http://localhost:8000

## Create a Django App

```text
python manage.py startapp my_ra_django_app
```

```text
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
```

**my\_ra\_django\_app/views.py**

```text
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

**my\_ra\_django\_app/urls.py**

```text
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

**my\_ra\_django\_project/urls.py**

```text
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('polls.urls')),
]
```

**my\_ra\_django\_project/settings.py**

Activate the App:

```text
# ...

INSTALLED_APPS = [
    'my_ra_django_app',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# ...
```

## Postgres

**my\_ra\_django\_project/settings.py**

```text
# ...

DATABASES = {

    'default': {

        'ENGINE': 'django.db.backends.postgresql_psycopg2',

        'NAME': 'ra_django_db',

        'USER': '<USER_NAME>',

        'PASSWORD': '<PASSWORD>',

        'HOST': 'localhost',

        'PORT': '5432',
    }
}
# ...
```

```text
pip3 install psycopg2
```

```text
createdb ra_django_db
```

```text
python manage.py makemigrations
```

```text
python manage.py migrate
```

```text
python manage.py createsuperuser
```

## Models

**my\_ra\_django\_app/models.py**

```text
from django.db import models

class Cat (models.Model):

    name = models.TextField()

    weight = models.IntegerField()

    owner = models.ForeignKey("Owner", on_delete=models.SET_NULL, null=True)

class Owner(models.Model):

    name = models.TextField()
```

```text
python manage.py makemigrations my_ra_django_app
```

```text
python manage.py migrate my_ra_django_app
```

## Seed Data

#### seed.json

```text
[
  {
    "model": "y_ra_django_app.cat",
    "pk": 1,
    "fields": {
      "name": "John",
      "weight": 123
    }
  },
  {
    "model": "y_ra_django_app.cat",
    "pk": 2,
    "fields": {
      "name": "Paul",
      "weight": 999
    }
  }
]
```

```text
manage.py loaddata seed.json
```

## Using Models

```text
from django.shortcuts import render

from hellocoin.models import Cat, Owner

def index(request, pk):

    owner_obj = Owner.objects.get(pk=pk)

    cat_objs = Cat.objects.filter(owner_id=owner_obj.id)

    context = {

        "cats": cat_objs,

        "owners": owner_obj,

    }

    return render(request, "index.html", context)
```

## HTML Views

```text
mkdir my_ra_django_app/templates
```

#### ra\_django\_app/template/base.html

```text
<!doctype html>

<html>

    <head>

        <meta charset="utf-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">



        <title>Contacts</title>

        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

    </head>

    <body>

{% block page_content %}{% endblock %}

    </body>

</html>
```

#### ra\_django\_app/template/index.html

```text
{% extends "base.html" %}

{% block page_content %}

        <div class="mw6 center pa3 sans-serif">

            <h1 class="mb4">Owner: {{ owners.name | linebreaks }}</h1>

        {% for c in cats %}

            <div class="pa2 mb3 striped--near-white">

                <div class="pl2">

                    <p class="mb2">Name: {{ c.name }}</p>

                    <p class="mb2">Weight: {{ c.weight }}</p>

                </div>

            </div>

        {% endfor %}

        </div>

{% endblock %}
```

