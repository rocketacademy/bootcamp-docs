# 9.3: Django

Django is an MVC framework written in Python. It was first released in 2005.

## Environment Setup

The standard development workflow for writing applications in Python includes infrastructure for managing "environments". These include a specific version of the Python language and a specific set of library dependencies for that project.

{% hint style="info" %}
Python Versions: Python version 3 introduced breaking changes in the language. We are using the version 3. Some computers rely on Python (like all MacOS computers) but are running the older version 2 by default.

We want to be able to install a new version of Python onto the computer but without disturbing the older version, which is used by other various parts of the computer.
{% endhint %}

```bash
brew install python
```

#### Windows

{% hint style="danger" %}
In Ubuntu Python should already be installed with the correct version (version 3) under the command `python3`. \
\
In all the following instructions where it says `python` use the command `python3` instead.\
\
If Python version 3 is not installed, install it with the command: `sudo apt-get install python3`
{% endhint %}

Make sure this extra Postgres Library is installed:

```markup
sudo apt-get install libpq-dev
```

#### pip

pip is the package management library for Python. It works very similarly to NPM.

#### virtualenv

virtualenv is the library we'll use to manage the Python language version and dependencies. `virtualenvwrapper` is another set of scripts that helps manage everything virtualenv has to do.

```bash
pip3 install virtualenvwrapper
```

#### Windows

```bash
sudo pip3 install virtualenvwrapper
```

After we install virtualenv we have to set some configurations on the terminal.

#### virtualenv terminal example configs

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/local/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/local/bin/python3 '
export PROJECT_HOME=$HOME/code/django
source /usr/local/bin/virtualenvwrapper.sh
```

#### virtualenv terminal config template

Replace your own values in the template.

Create a folder for all the Django work you'll do. (`<DJANGO_PROJECTS_PATH>`)

To find your Python path: `which python`

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=<PYTHON_PATH>
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p <PYTHON_PATH> '
export PROJECT_HOME=<DJANGO_PROJECTS_PATH>
source /usr/local/bin/virtualenvwrapper.sh
```

To keep these configs permanently, paste them into your shell configuration file, i.e.`.zshrc` on Mac or `.bashrc` if you are using Bash on Windows/Ubuntu.

Don't forget to run the `source` command on the config file after you've saved it- e.g. `source .zshrc`

### Create a Virtual Environment

Once the terminal has been configured we can create the environment for Django.

```bash
mkvirtualenv my_ra_django_env
```

You can see the environment has been set at this variable:

```bash
echo $VIRTUAL_ENV
```

Note that this system is setup for managing multiple Python environments, but we'll only need one for this demo. In other situations you would give a more specific name to your virtual env.

### Workon

When a new terminal is opened `workon` may need to be run so the virtual env can be initialized.

```markup
workon my_ra_django_env
```

See more here: [https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html#workon](https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html#workon)

### Further Reading

[https://pypi.org/](https://pypi.org)

[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment)

[https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3](https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3)

[https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html](https://virtualenvwrapper.readthedocs.io/en/latest/command_ref.html)

[https://www.freecodecamp.org/news/virtualenv-with-virtualenvwrapper-on-ubuntu-18-04/](https://www.freecodecamp.org/news/virtualenv-with-virtualenvwrapper-on-ubuntu-18-04/)

## Create a Django Project

Now we can begin to fill in our Django environment by installing our dependencies.

```bash
pip3 install django
```

Now we can create a "project". This would be the top level of our repository, the set of code we'll begin working on.

```bash
django-admin startproject my_ra_django_project
```

```bash
django-admin startproject <PROJECT_NAME>
```

It will create a directory structure like this:

```bash
<REPO_ROOT>/
    manage.py
    my_ra_django_project/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

Django is set up out of the box to run after the startproject script is run (even though it doesn't do much).

```bash
cd my_ra_django_project
```

Run the server by running the `manage.py` file.

```bash
python manage.py runserver
```

Visit: [http://localhost:8000](http://localhost:8000)

### Further Reading

[https://docs.djangoproject.com/en/3.1/intro/install/](https://docs.djangoproject.com/en/3.1/intro/install/)

## Create a Django App

Django projects contain one or many "apps" inside. In order for our project to do anything we have to add at least one app. The app we will create is a sibling directory of our project.

```bash
python manage.py startapp my_ra_django_app
```

The directory structure for the entire repo should look like this:

```bash
<REPO_ROOT>/
    manage.py
    my_ra_django_project/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
    my_ra_django_app/
        __init__.py
        admin.py
        apps.py
        migrations/
            __init__.py
        models.py
        tests.py
        views.py
```

**Views**

In Django, what we might call controllers in Express are called views.

**my_ra_django_app/views.py**

```python
from django.http import HttpResponse

def index(request):
    # send back a text response
    return HttpResponse("Hello, world. You're at the index.")
```

**URLs**

urls.py is similar to routes.js in the Express.js MVC framework we created. It contains the route matching strings and the view functions that will get called when a request matches that URL.

There are actually 2 urls.py files, and we need to alter both in order for a request to get to our app. Django looks at the project level `urls.py` first.

**my_ra_django_project/urls.py**

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('my_ra_django_app.urls')),
]
```

Create a urls file in the app as well:

**my_ra_django_app/urls.py**

```python
from django.urls import path

# import the view function from the views file
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

Before we can test the app code, the app itself has to be added to the Django project configuration.

**my_ra_django_project/settings.py**

```python
# ...

INSTALLED_APPS = [
    'my_ra_django_app', # add the name of the app to the configs
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

Django does not come with Postgres by default. It needs to be added.

We must install the Postgres / Python adapter library first:

```bash
pip3 install psycopg2
```

Then create the database in Postgres:

```bash
createdb ra_django_db
```

Then set the configurations:

**my_ra_django_project/settings.py**

```python
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

Now we can use Django to alter the database.

{% hint style="danger" %}
**11/6/2021**: On new M1 Apple products there may be some issues compiling the `psycopg2` library on ARM. See this thread: [https://github.com/psycopg/psycopg2/issues/1216](https://github.com/psycopg/psycopg2/issues/1216)
{% endhint %}

### Migrations

Django knows by default how to create a migration, it does not need specific instructions. We need to create one based on the default settings.

```python
python manage.py makemigrations
```

Run the migration:

```
python manage.py migrate
```

Django comes with user functionality builtin. It's best to create a singe default user to begin with.

```
python manage.py createsuperuser
```

### Default Tables

Django initialises several standard tables when we run migrations. This is what they look like in psql.

```markup
 Schema |            Name            | Type  | Owner
--------+----------------------------+-------+-------
 public | auth_group                 | table | akira
 public | auth_group_permissions     | table | akira
 public | auth_permission            | table | akira
 public | auth_user                  | table | akira
 public | auth_user_groups           | table | akira
 public | auth_user_user_permissions | table | akira
 public | django_admin_log           | table | akira
 public | django_content_type        | table | akira
 public | django_migrations          | table | akira
 public | django_session             | table | akira
```

It includes things like the migration tracking table (like Sequelize does) and also the user table and user auth table. We'll see that in the next section.

## Models

Django models work very similarly to Sequelize models. They are class instances that allow us to retrieve data from the database without writing SQL statements.

**my_ra_django_app/models.py**

```python
from django.db import models

class Cat (models.Model):

    name = models.TextField()

    weight = models.IntegerField()

    owner = models.ForeignKey("Owner", on_delete=models.SET_NULL, null=True)

class Owner(models.Model):

    name = models.TextField()
```

We can run `makemigrations` to automatically generate the table creation statements, based only on the model code we wrote above.

```
python manage.py makemigrations my_ra_django_app
```

Run the migration:

```
python manage.py migrate my_ra_django_app
```

### Further Reading

[https://docs.djangoproject.com/en/3.1/topics/db/models/](https://docs.djangoproject.com/en/3.1/topics/db/models/)

## Seed Data

Seed data works similarly to Sequelize seed data. There are a few choices for formatting the file.

#### seed.json

```javascript
[
  {
    model: 'my_ra_django_app.owner',
    pk: 1,
    fields: {
      name: 'Kai',
    },
  },
  {
    model: 'my_ra_django_app.owner',
    pk: 2,
    fields: {
      name: 'Alexander',
    },
  },
  {
    model: 'my_ra_django_app.cat',
    pk: 1,
    fields: {
      name: 'John',
      weight: 123,
      owner_id: 1,
    },
  },
  {
    model: 'my_ra_django_app.cat',
    pk: 2,
    fields: {
      name: 'Paul',
      weight: 999,
      owner_id: 1,
    },
  },
];
```

```
python manage.py loaddata my_ra_django_app/seed.json
```

### Further Reading:

[https://docs.djangoproject.com/en/3.1/howto/initial-data/](https://docs.djangoproject.com/en/3.1/howto/initial-data/)

## Using Models

Now we can use the models in the Django code.

We'll make a new route to test the model:

**my_ra_django_app/urls.py**

```python
from django.urls import path

from . import views

urlpatterns = [
    path("owners/<int:primary_key>/", views.owners, name="owners"),
    path('', views.index, name='index'),
]
```

Now we can use the model in the views file:

**my_ra_django_app/views.py**

```python
from django.shortcuts import render

from my_ra_django_app.models import Cat, Owner

from django.http import HttpResponse


def index(request):
    # send back a text response
    return HttpResponse("Hello, world. You're at the index.")

def owners(request, primary_key):

    # get an owner based on the request params
    owner_obj = Owner.objects.get(pk=primary_key)

    # get the cats owned by this person
    cat_objs = Cat.objects.filter(owner_id=owner_obj.id)

    # construct a dict we'll use in the template
    context = {
        "cats": cat_objs,
        "owners": owner_obj,
    }

    return render(request, "owners.html", context)
```

### Further Reading

[https://docs.djangoproject.com/en/3.1/topics/db/queries/](https://docs.djangoproject.com/en/3.1/topics/db/queries/)

## HTML Views

In Django, the files that produce HTML are called templates. First we need to create a directory for them:

```
mkdir my_ra_django_app/templates
```

#### my_ra_django_app/template/base.html

We can create a partial template for things like the HTML `body` and `head`.

```markup
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RA Wow Django!</title>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </head>
    <body>
{% block page_content %}{% endblock %}
    </body>
</html>
```

#### my_ra_django_app/template/owners.html

Now we can output the data we passed into the render method above:

```markup
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

## Exercise

Follow the instructions above to create the Django app.

### Comfortable

Add other routes to this app:

| Route     | Method | Description      |
| --------- | ------ | ---------------- |
| /cats/:id | GET    | get a single cat |
| /         | GET    | get all the cats |
| /cats     | POST   | create a cat     |
| /owners   | POST   | create an owner  |

#### Further Reading on Forms:

[https://docs.djangoproject.com/en/3.1/intro/tutorial04/](https://docs.djangoproject.com/en/3.1/intro/tutorial04/)
