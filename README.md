settings.py line 23
ensure there is a SECRET_KEY value

settings.py line 28
ALLOWED_HOSTS = ["replace with ip not localhost"]

settings.py line 107-109
CORS_ORIGIN_WHITELIST = [
    "replace with frontend ip and port not localhost"
]

gallery.js line 6
fetch("http://ip address set in allowed hosts:8000/api/Earlkits/?format=json")

index.js line 6 
hostname = 'ip address front end is running on not localhost'


python version 3.8 or higher required
pip install django djangorestframework django-cors-headers pillow


commands to run servers

backend:
change directory into backend root directory
    python ./manage.py runserver ipaddress:8000
if any changes are done to any backend file:
    python ./manage/py makemigrations
    python ./manage/py migrate

frontend:
change directory into project root directory 
    npm start