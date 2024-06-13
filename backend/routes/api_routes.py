from flask import Blueprint, jsonify, request
from models import db, Product

api_bp = Blueprint('api', __name__)

@api_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@api_bp.route('/product', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product(name=data['name'], description=data['description'], link=data['link'])
    db.session.add(new_product)
    db.session.commit()
    return jsonify(new_product.to_dict()), 201
