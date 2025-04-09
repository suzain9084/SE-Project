from flask import Blueprint,request,jsonify
from grievance_app.controller.grievance_controller import GrievanceController

grievance_bp = Blueprint('grievance_bp',__name__)

@grievance_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    return GrievanceController.signup(data)

@grievance_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    return GrievanceController.login(data)

@grievance_bp.route('/add_grievance', methods=['POST'])
def add_grievance():
    file = request.files
    data = request.form
    return GrievanceController.add_grievance(file,data)

