from flask import jsonify

class GrievanceView:
    @staticmethod
    def render_grievance(grievance):
        return jsonify(grievance)

    @staticmethod
    def render_text(text):
        return jsonify(text)
