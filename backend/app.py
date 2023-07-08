from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os

# Load the environment variables from .env file
load_dotenv()

# Access the environment variables
DBpassword = os.getenv('DATABASE_PASSWORD')

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = DBpassword
app.config['MYSQL_DB'] = 'jpmc_cfg'

mysql = MySQL(app)

@app.route('/', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    cur.close()
    employee =[]
    content ={}
    for result in rows:
        content = {'userID': result[0], 'firstName': result[1], 'lastName': result[2], 'age': result[3], 'emailID': result[4], 'imageLink':result[5]}
        employee.append(content)
        content={}
    return jsonify(employee)

if __name__ == '__main__':
    app.run()
