from flask import Flask, jsonify, request
import csv

app = Flask(__name__)

COLLEGE_CSV_PATH = "data/college_list.csv"

def load_colleges():
    with open(COLLEGE_CSV_PATH, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        return [row["College Name"] for row in reader]

def get_colleges():
    colleges = load_colleges()
    page = int(request.args.get("page", 1))
    per_page = 20

    start = (page - 1) * per_page
    end = start + per_page
    total_pages = (len(colleges) + per_page - 1) // per_page

    return jsonify({
        "colleges": colleges[start:end],
        "total_pages": total_pages,
        "current_page": page
    })
