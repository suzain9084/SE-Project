from user_app.services.user_service import UserService
from shared.models.user_model import User
from user_app.view.user_view import UserView

class UserController:
    @staticmethod
    def signup(data):
        if User.query.filter_by(student_id=data['student_id']).first() or User.query.filter_by(email=data['email']).first():
            return UserView.render_error("Student ID or Email already exists"), 400
        res, user = UserService.signup(data)
        if res:
            return UserView.renderUser(user), 201
        else:
            return UserView.render_error(user), 500

    @staticmethod
    def login(data):
        res, user = UserService.login(data)
        if res:
            return UserView.renderUser(user), 200
        else:
            return UserView.render_error(user), 401
        
    @staticmethod
    def update(data):
        full_name = data['full_name']
        email = data['email']
        phone = data['phone']
        u_id = data['u_id']
        print("hello")
        res,user = UserService.update(full_name,email,phone,u_id)
        if res:
            return UserView.renderUser(user),200
        else:
            return UserView.render_error(user),500
