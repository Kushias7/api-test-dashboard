from flask import Flask, jsonify, request
import subprocess
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/run_tests', methods=['POST'])
def run_tests():
    try:
        result = subprocess.run(['robot', 'api_tests.robot'], capture_output=True, text=True)
        test_output = result.stdout
        return jsonify({
            'status': 'success',
            'output': test_output,
            'timestamp': datetime.now().isoformat()
        })
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/test_results', methods=['GET'])
def get_results():
    return jsonify({
        'pass': 10,
        'fail': 2,
        'coverage': 92,
        'avg_response_time': 120,
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    app.run(debug=True)

