# Django

Django is a high-level Python web framework designed to simplify and expedite
web development. It provides developers with a comprehensive toolkit and a
well-defined structure for building robust and scalable web applications. Django
aims to address common challenges faced during web development by offering a
batteries-included approach, meaning it includes many features out of the box,
such as an ORM for database interactions, a template system for rendering
dynamic content, and an admin interface for managing site content.

One of the key problems Django solves is the need for efficient and secure data
handling. Its Object-Relational Mapping (ORM) allows developers to define
database models in Python code, abstracting away the complexities of manual SQL
queries and database management. Additionally, Django's built-in forms and
authentication system streamline the process of handling user input and managing
user accounts, providing robust security features by default.

What sets Django apart from other solutions is its emphasis on code simplicity,
maintainability, and reusability. Django promotes the principle of "Don't Repeat
Yourself" (DRY) by encouraging developers to write reusable components and
follow best practices. Its modular design and extensive ecosystem of reusable
packages make it highly customizable and adaptable to a wide range of web
development needs. Moreover, Django's strong community support, comprehensive
documentation, and emphasis on testing contribute to its popularity and
reliability.

## 1. Introduction and setup

In this section we will get familiar with Django's documentation, its basic
concepts, and how to set up a new Django project. Throughout your learning, you
should make extensive use of Django's official documentation as well as any
other resources you can find to support your learning.

### Tasks

1. Familiarize yourself with Django's features and benefits:

   - Read the official Django website's overview section to understand what
     Django offers [link](https://www.djangoproject.com/)
   - Explore the Django project's GitHub repository for a high-level view of the
     framework (https://github.com/django/django)

2. Install Django using pip (Python package manager):

   - Open your command-line interface (CLI) or terminal.
   - Create a virtual environment (optional but recommended) using
     `python3 -m venv env_name` (replace env_name with a name of your choice).
   - Activate the virtual environment using the appropriate command for your
     operating system (e.g. `source env_name/bin/activate` on Unix-based
     systems).
   - Install Django by running `pip install Django`.
   - Verify that Django is installed correctly by running
     `python3 -m django --version` in your CLI. It should display the installed
     Django version.

3. Create a new Django project and run the development server:

   - Navigate to the directory where you want to create your project.
   - Run the command `django-admin startproject project_name` (replace
     project_name with the desired name for your project).
   - Change into the project directory using `cd project_name`.
   - Start the development server with `python manage.py runserver`.
   - Open a web browser and visit http://localhost:8000/ to see the default
     Django welcome page.

4. Explore the basic project structure and configuration files:

   - Use a text editor or IDE to open the project directory.
   - Take a look at the files and directories created by the `startproject`
     command.
   - Read the Django documentation's tutorial on the project layout to
     understand the purpose of each file
     (https://docs.djangoproject.com/en/3.2/intro/tutorial01/#creating-a-project)

## 2. Models and Databases

In this section, we'll learn how Django handles interactions with the database
through its Model system and ORM.

### Tasks

1. Understand Django's Object-Relational Mapping (ORM) and its role in database
   interactions:

   - Read the Django documentation's guide on models to understand how Django's
     ORM works and its benefits
     (https://docs.djangoproject.com/en/stable/topics/db/models/)

2. Define models to represent your application's data using Django's Model
   syntax:

   - Create a new Django app within your project using the command
     `python manage.py startapp app_name` (replace `app_name` with the desired
     name for your app).
   - Open the models.py file within your app directory and define your models
     using Django's Model syntax. Consult the documentation's guide on models
     for details
     (https://docs.djangoproject.com/en/stable/topics/db/models/#defining-models)

3. Create database tables based on your models using migrations:

   - Generate initial migrations for your app using the command
     `python manage.py makemigrations app_name` (replace `app_name` with the
     name of your app).
   - Apply the migrations to create database tables using
     `python manage.py migrate`.

4. Perform basic database operations such as creating, retrieving, updating, and
   deleting objects:

   - Open the Django shell by running `python manage.py shell`.
   - Use the shell to interact with your models and perform database operations.
     Refer to the Django documentation's guide on making queries for examples
     and instructions
     (https://docs.djangoproject.com/en/stable/topics/db/queries/)

5. Learn about Django's QuerySet API for complex database queries:
   - Explore the Django documentation's guide on making complex queries using
     QuerySets to understand advanced querying capabilities
     (https://docs.djangoproject.com/en/stable/topics/db/queries/)

## 3. Views and Templates

In this section, we'll look at how Django offers data to the client, including
the concept of a "view" and html templates.

### Tasks

1. Create views to handle user requests and generate responses:

   - Open the views.py file within your app directory.
   - Define view functions using Django's view syntax to handle specific URLs
     and perform actions. Refer to the Django documentation's guide on views for
     details (https://docs.djangoproject.com/en/stable/topics/http/views/)

2. Understand the role of URL patterns in mapping URLs to views:

   - Open the urls.py file within your app directory.
   - Define URL patterns using Django's URL syntax to map specific URLs to your
     views. Consult the Django documentation's guide on URL dispatching for
     instructions (https://docs.djangoproject.com/en/stable/topics/http/urls/)

3. Use Django's template system to separate the presentation logic from your
   Python code:

   - Create a templates directory within your app directory.
   - Create HTML templates within the templates directory to define the
     structure and layout of your pages. Refer to the Django documentation's
     guide on templates for details
     (https://docs.djangoproject.com/en/stable/topics/templates/)

4. Design and implement basic templates for rendering dynamic content:

   - Modify your views to pass data to the templates.
   - Update your HTML templates to display dynamic content using Django's
     template tags and filters. Consult the Django documentation's guide on
     template language for examples and instructions
     (https://docs.djangoproject.com/en/stable/topics/templates/#the-django-template-language)

5. Explore template inheritance and how it helps in reusing code:
   - Create a base template that contains common elements shared across multiple
     pages.
   - Extend the base template in other templates to inherit its structure and
     add specific content. Read the Django documentation's guide on template
     inheritance for more information
     (https://docs.djangoproject.com/en/stable/topics/templates/#template-inheritance)

## 4. Forms and User Authentication

In this section, we'll look at handling user input, including role and
permission based access to protected resources.

### Tasks

1. Build forms to handle user input and data validation:

   - Open the forms.py file within your app directory.
   - Define form classes using Django's form syntax to handle user input and
     perform validation. Consult the Django documentation's guide on forms for
     details (https://docs.djangoproject.com/en/stable/topics/forms/)

2. Learn about Django's Form class and its built-in validation methods:

   - Explore the Django documentation's guide on working with forms to
     understand the features and functionality provided by Django's Form class
     (https://docs.djangoproject.com/en/stable/topics/forms/#the-django-form-class)

3. Implement user authentication and authorization using Django's authentication
   framework:

   - Open the settings.py file within your project directory.
   - Configure Django's authentication backend and settings according to your
     project requirements. Refer to the Django documentation's guide on
     authentication for instructions
     (https://docs.djangoproject.com/en/stable/topics/auth/)

4. Customize user registration, login, and password reset functionality:

   - Create appropriate views and templates to handle user registration, login,
     and password reset actions.
   - Utilize Django's built-in authentication views and forms or create custom
     ones as needed. Consult the Django documentation's guide on authentication
     views for details
     (https://docs.djangoproject.com/en/stable/topics/auth/default/#views)

5. Understand the use of decorators for protecting views and restricting access:
   - Explore Django's decorators such as `@login_required` and
     `@permission_required` to enforce authentication and authorization rules on
     specific views. Read the Django documentation's guide on decorators for
     more information
     (https://docs.djangoproject.com/en/stable/topics/auth/default/#decorators)

## 5. Advanced Topics and Deployment

In this section, we'll advance our knowledge of Django's features by looking at
important solutions for common tasks which improve the functionality as well as
the quality of our codebase. We'll also look at how to make our project
available to end-users.

### Tasks

1. Explore advanced Django features such as class-based views, middleware, and
   context processors:

   - Read the Django documentation's guide on class-based views to understand
     their benefits and how to use them
     (https://docs.djangoproject.com/en/stable/topics/class-based-views/)
   - Learn about Django's middleware and how it can modify requests and
     responses in the processing pipeline
     (https://docs.djangoproject.com/en/stable/topics/http/middleware/)
   - Understand context processors and how they provide additional variables to
     all templates
     (https://docs.djangoproject.com/en/stable/ref/templates/api/#writing-your-own-context-processors)

2. Learn about Django's admin interface for managing site content:

   - Access the Django admin interface by running
     `python manage.py createsuperuser` to create a superuser account.
   - Start the development server with `python manage.py runserver` and navigate
     to `http://localhost:8000/admin/`.
   - Explore the admin interface to manage your app's models, records, and
     permissions. Refer to the Django documentation's guide on the admin
     interface for more information
     (https://docs.djangoproject.com/en/stable/ref/contrib/admin/)

3. Integrate static files (CSS, JavaScript) and handle media uploads:

   - Create a static directory within your app directory to store static files.
   - Configure the static file settings in your project's settings.py file.
     Refer to the Django documentation's guide on managing static files for
     instructions (https://docs.djangoproject.com/en/stable/howto/static-files/)
   - Implement media upload functionality to handle user-uploaded files. Consult
     the Django documentation's guide on managing files for details
     (https://docs.djangoproject.com/en/stable/topics/files/)

4. Understand the basics of deployment and hosting Django applications:
   - Research different deployment options such as using a hosting platform or
     setting up your own server.
   - Learn about deploying Django on platforms like Heroku
     (https://devcenter.heroku.com/articles/deploying-python) or AWS
     (https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-django.html).
   - Follow the deployment guides provided by the chosen hosting platform to
     deploy your Django project.

## Project idea

To practise what you have learned each day, you could build a _task manager_
application:

- Create a task manager application where users can register, log in, and manage
  their tasks.
- Implement features such as creating tasks, assigning priorities, setting due
  dates, and marking tasks as complete.
- Use Django's authentication framework for user registration and login, and
  leverage Django's models and forms for task management.

Here are some things you could do for each section of the plan to put your
learning into practise:

### 1. Setup and Project Structure

- Set up a new Django project using the `django-admin startproject` command.
- Create a new Django app within your project using the
  `python manage.py startapp` command.
- Define the basic project structure and configure the necessary settings.

### 2. Models and Databases

- Define a model for tasks in your app's models.py file, including fields like
  title, description, priority, due date, etc.
- Generate and apply migrations to create the database table for the tasks
  model.
- Implement basic database operations like creating, retrieving, updating, and
  deleting tasks using Django's ORM.

### 3. Views and Templates

- Create a view function to handle displaying a list of tasks.
- Design and implement a template to render the list of tasks using Django's
  template system.
- Update the view function to pass the list of tasks to the template context and
  render it.

### 4. Forms and User Authentication

- Create a form for adding new tasks in your app's forms.py file.
- Implement a view function to handle the form submission and create a new task.
- Implement user authentication using Django's authentication framework for user
  registration and login.

### 5. Advanced Functionality and Refinement

- Enhance the task manager with additional features like task editing, marking
  tasks as complete, and filtering tasks.
- Improve the user experience by adding pagination to the task list view.
- Apply styling and CSS to make the task manager visually appealing.

Remember, this is just one suggestion and you are more than welcome to come up
with your own idea for something to build in order to practise what you've
learned.
