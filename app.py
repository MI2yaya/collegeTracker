from flask import Flask, request, jsonify, render_template
from flask_cors import CORS  # Import CORS
import os

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    return render_template('home.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Use PORT from environment or default to 5000
    app.run(host='0.0.0.0', port=port, debug=True)
