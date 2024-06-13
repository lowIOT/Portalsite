from flask import Flask
from flask_cors import CORS
from routes.api_routes import api_bp
from routes.user_routes import user_bp
from utils.db_utils import init_db

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db(app)

# Register blueprints
app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(user_bp, url_prefix='/user')

if __name__ == '__main__':
    app.run(debug=True)
