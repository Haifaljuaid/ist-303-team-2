### Notes for step by step authintication for the Flask Application!

- First we need a virtual environment for the project. You can install it using:
```python3 -m venv auth ```. Here -m flag is for module name which executes model venv, virtual environment named auth.It creasted new directory and bin, include, lib sub dir.

- Active the venv using venv name > bin/activate. 
```source auth/bin/activate ```

- Next we need to install falsk and other library into this venv.
```pip install flask flask-sqlalchemy flask-login```

- Now we will start with making the main app file.
In project folder create __init__.py file. This file will have the function to create the app, which will initialize the database and register the blueprints. At the moment, this will not do much, but it will be needed for the rest of the app.

Models created in Flask-SQLAlchemy are represented by classes that then translate to tables in a database. The attributes of those classes then turn into columns for those tables.