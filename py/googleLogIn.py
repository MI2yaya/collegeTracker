from flask import request, jsonify
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
import os
from dotenv import load_dotenv

load_dotenv()
#this doesnt work.... but why!?!?!??!?!???!??!???!?!??!??!? soon.

def google_login():
    token = request.json.get("id_token")
    try:
        idinfo = id_token.verify_oauth2_token(token, google_requests.Request(), os.getenv("GOOGLEOAUTHCLIENTID"))
        user_email = idinfo["email"]
        user_name = idinfo.get("name")

        # handle user login/signup here
        print("Ding!")
        return jsonify({"status": "success", "email": user_email, "name": user_name})
    except ValueError as e:
        return jsonify({"status": "error", "message": str(e)}), 400
