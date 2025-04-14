from flask import jsonify

class UserView:
    @staticmethod
    def renderUser(user):
        return jsonify({
            'u_id': user.u_id,
            'student_id': user.student_id,
            'full_name': user.full_name,
            'email': user.email,
            'phone': user.phone,
            'department': user.department,
            'year': user.year,
            'u_id': user.u_id
        })
    
    @staticmethod
    def render_error(error):
        return jsonify({'message':error})

    @staticmethod
    def render_grievance(grievance):
        return jsonify(grievance)


