from flask import jsonify

class GrievanceView:
    @staticmethod
    def renderUser(user):
        return jsonify({
            'u_id': user.u_id,
            'name': user.name,
            'address': user.address,
            'city': user.city,
            'country': user.country,
            'email': user.email,
            'phone': user.phone
        })
    
    @staticmethod
    def render_error(error):
        return jsonify({'message':error})

    @staticmethod
    def render_grievance(grievance):
        return jsonify(grievance)


