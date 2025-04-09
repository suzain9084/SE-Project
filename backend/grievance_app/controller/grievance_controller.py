from grievance_app.services.grievance_service import GrievanceService
from shared.models.user_model import User
from grievance_app.view.grievance_view import GrievanceView

class GrievanceController:
    @staticmethod
    def signup(data):
        if User.query.filter_by(email=data['email']).first():
            return GrievanceView.render_error("Email id already exists"), 400
        res, user = GrievanceService.signup(data)
        if res:
            return GrievanceView.renderUser(user), 201
        else:
            return GrievanceView.render_error(user), 500

    @staticmethod
    def login(data):
        res, user = GrievanceService.login(data)
        if res:
            return GrievanceView.renderUser(user), 200
        else:
            return GrievanceView.render_error(user), 401
        
    @staticmethod
    def add_grievance(file,data):
        user_id = data["u_id"]
        c_id = data["c_id"]
        audio = file['file'].read()
        text = data['name']
        res, grievance = GrievanceService.add_grievance(user_id,c_id,audio,text)
        if res:
            return GrievanceView.render_grievance(grievance)
        else:
            return GrievanceView.render_error(grievance)
