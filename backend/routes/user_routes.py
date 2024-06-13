from flask import Blueprint, jsonify

user_bp = Blueprint('user', __name__)

@user_bp.route('/profile', methods=['GET'])
def get_profile():
    # サンプルデータ
    user = {"username": "test_user", "email": "test@example.com"}
    return jsonify(user)
