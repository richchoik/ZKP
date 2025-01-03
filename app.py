from flask import Flask, request, jsonify
from flask_cors import CORS
from collections import defaultdict

app = Flask(__name__)
CORS(app)

votes = defaultdict(int)
voted_numbers = set()

@app.route('/api/vote', methods=['POST'])
def vote():
    data = request.get_json()
    candidate_id = data.get('candidateId')
    phone_number = data.get('phoneNumber')

    if phone_number in voted_numbers:
        return jsonify({"success": False, "message": "Already voted"}), 400

    voted_numbers.add(phone_number)
    votes[candidate_id] += 1
    return jsonify({"success": True})

@app.route('/api/votes', methods=['GET'])
def get_votes():
    return jsonify(votes)

if __name__ == '__main__':
    app.run(debug=True)
