from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import CORS
import os



app = Flask(__name__)
CORS(app)
#home.html
@app.route('/')
def home():
    return render_template('home.html')

#account.html
from py.googleLogIn import google_login
@app.route('/account')
def account():
    return render_template('account.html')
@app.route("/google-login", methods=["POST"])
def google_login_function():
    return google_login()

#college.html
from py.college import get_colleges
@app.route("/college")
def college():
    return render_template("college.html")
@app.route("/api/get_colleges")
def get_colleges_function():
    return get_colleges()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Use PORT from environment or default to 5000
    app.run(host='0.0.0.0', port=port, debug=True)
