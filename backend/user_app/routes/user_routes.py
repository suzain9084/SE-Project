from flask import Blueprint,request,jsonify
from user_app.controller.user_controller import UserController

user_bp = Blueprint('user_bp',__name__)

@user_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    return UserController.signup(data)

@user_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    return UserController.login(data)

@user_bp.route("/update",methods=['PUT'])
def udate():
    data = request.json
    return UserController.update(data)

@user_bp.route('/add_grievance', methods=['POST'])
def add_grievance():
    file = request.files
    data = request.form
    return UserController.add_grievance(file,data)

