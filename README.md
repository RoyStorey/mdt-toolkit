Ensure values are set in a backend/backend/variables.env file to the correct values
Three values need to be set:
    HOST_IP
    SECRET_KEY
    WHITELISTED_REACT
HOST_IP is the local IP address that the backend will be running off of NOT localhost
SECRET_KEY needs to have a value
WHITELISTED_REACT is the local IP address for the front end react with the port it runs off of (ex. http://192.168.1.123:3000)

MUST CHANGE THE IP ADDRESSES FOR THE FRONT END 
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