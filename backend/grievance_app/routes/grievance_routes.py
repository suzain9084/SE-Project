from flask import Blueprint,request
from grievance_app.controller.grievance_controller import GrievanceController

grievance_bp = Blueprint('grievance_bp',__name__)

@grievance_bp.route('/add_grievance', methods=['POST'])
def add_grievance():
    data = request.files
    return GrievanceController.add_grievance(data)


@grievance_bp.route("/speechToText", methods=['POST'])
def speechToText():
    print("hello")
    try:
        file = request.files['file']
        return GrievanceController.convertToText(file)
    except Exception as error:
        print(error)
        return error

