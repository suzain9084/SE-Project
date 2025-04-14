from shared.models.user_model import User
from shared.utils.db_utils import db
from shared.models.grievance_model import Grievance
from werkzeug.security import generate_password_hash,check_password_hash

class UserService:
    @staticmethod
    def signup(data):
        try:
            hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256', salt_length=8)
            new_user = User(
                full_name=data['full_name'],
                student_id=data['student_id'],
                email=data['email'],
                phone=data['phone'],
                password=hashed_password,
                department=data['department'],
                year=data['year']
            )
            db.session.add(new_user)
            db.session.commit()
            return True, new_user
        except Exception as error: 
            db.session.rollback()
            return False, str(error)
        
    @staticmethod
    def login(data):
        try:
            user = User.query.filter_by(student_id=data['student_id']).first()
            if user and check_password_hash(user.password, data['password']):
                return True, user
            else:
                return False, "Invalid student ID or password"
        except Exception as error:
            db.session.rollback()
            return False, str(error)
        
    @staticmethod
    def add_grievance(user_id,c_id,audio,text):
        try:
            new_grievance = Grievance(u_id=user_id,c_id=c_id,audio=audio,text=text,status='pending')
            db.session.add(new_grievance)
            db.session.commit()
            return True, new_grievance
        except Exception as error:
            db.session.rollback()
            return False, str(error)

    @staticmethod
    def update(full_name, email, phone, u_id):
        try:
            user = User.query.filter_by(u_id=u_id).first()
            print(user)
            if user:
                user.full_name = full_name
                user.email = email
                user.phone = phone
                db.session.commit()
                return True, user
            return False, "User not Found"
        except Exception as error:
            return False, str(error)

