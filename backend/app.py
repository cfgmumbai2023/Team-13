from flask import Flask
from database import create_db_connection

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route and its corresponding function
@app.route('/')
def index():
    connection = create_db_connection()
    cursor = connection.cursor()

    cursor.execute('SELECT * FROM users')
    data = cursor.fetchall()

    cursor.close()
    connection.close()

    return str(data)

# Run the Flask application
if __name__ == '__main__':
    app.run()
