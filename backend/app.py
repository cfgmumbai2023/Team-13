from flask import Flask, jsonify, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os
import bcrypt

# Load the environment variables from .env file
load_dotenv()

# Access the environment variables
DBpassword = os.getenv('DATABASE_PASSWORD')


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = DBpassword
app.config['MYSQL_DB'] = 'jpmc_cfg'

cors = CORS(app)

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

@app.route('/api/register', methods=['POST'])
def registerUser():
    data = request.json
    userID = data.get('userID')
    password = data.get('password')
    role = data.get('role')

    cur.execute(f'SELECT userID from logins WHERE userID = {userID}')
    rows = cur.fetchall()
    if (len(rows) != 0):
        return 'Sorry, this username already exists'
    else:
        hashedpassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO logins (userID, password, role) VALUES (%s, %s, %s)", (userID, password, role))


@app.route('/api/login', method = ['POST'])
def loginUser():
    data = request.json
    userID = data.get('userID')
    password = data.get('password')
    role = data.get('role')

    hashedpassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    cur.execute(f'SELECT userID from logins WHERE userID = {userID}')

    



if __name__ == '__main__':
    app.run()
