# This is the backend server, it will use Django and Django Rest Framework to create a REST API
# This will store information about the scene, the characters, user information, etc.

import django
import os
import sys

# Initialize Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
django.setup()

# Import your Django models, views, and other components
from myapp.models import MyModel
from myapp.views import MyView

# Your main logic here
def main():
    # Your code to integrate with OpenAI, Needle Engine, etc.
    pass

if __name__ == "__main__":
    main()

# TODO: Fix errors that are not allowing django to function



