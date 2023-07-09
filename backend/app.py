from flask import Flask, jsonify, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from flask_cors import CORS
from dotenv import load_dotenv
import os
import bcrypt
import json

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
def index():
    if 'username' in session:
        return 'Logged in as ' + session['username']
    return 'You are not logged in'

@app.route('/api/register', methods=['POST'])
def registerUser():
    userID = request.form.get('userID')
    password = request.form.get('password')
    role = request.form.get('role')
    email = request.form.get('email')
    cur = mysql.connection.cursor()
    cur.execute(f'SELECT userID from logins WHERE userID = \'{userID}\'')
    rows = list(cur.fetchall())
    print(rows)
    
    hashedpassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO logins (userID, password, role) VALUES (%s, %s, %s)", (userID, hashedpassword, role))
    return redirect('/login')

@app.route('/api/login', methods = ['POST'])
def loginUser():
    data = request.get_json()
    userID = data['userID']
    password = data['password']
    
    # hashedpassword = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    cur = mysql.connection.cursor()
    cur.execute(f'SELECT password from logins WHERE userID = \'{userID}\'')
    rows = list(cur.fetchall())
    # print(hashedpassword, '\n')

    if (password == rows[0][0]):
        cur = mysql.connection.cursor()
        cur.execute(f"SELECT * FROM users WHERE userID = \'{userID}\'")
        rows = cur.fetchall()
        cur.close()
        content = {'userID': rows[0][0], 'name': rows[0][1], 'number': rows[0][2], 'address': rows[0][3], 'country': rows[0][4], 'pincode':rows[0][5], 'sport':rows[0][6], 'agegroup':rows[0][7], 'graddegree':rows[0][8]}
        json_data = json.dumps(content)
        return json_data
    else:
        return 'Wrong Password'

@app.route('/api/courses', methods = ['GET'])
def getCourses():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM courses")
    rows = cur.fetchall()
    cur.close()
    courses =[]
    course ={}
    for result in rows:
        course = {'id': result[0], 'title': result[1], 'imageUrl': result[2], 'hours': result[3], 'rating': result[4], 'level':result[5]}
        courses.append(course)
        course={}
    return jsonify(courses)



if __name__ == '__main__':
    app.run()
