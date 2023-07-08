from flask import Flask
import mysql.connector
from dotenv import load_dotenv
import os

# Load the environment variables from .env file
load_dotenv()

# Access the environment variables
DBpassword = os.getenv('DATABASE_PASSWORD')
print(DBpassword)


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = DBpassword
app.config['MYSQL_DB'] = 'jpmc_cfg'

def create_db_connection():
    connection = mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    return connection


