from grievance_app.service.grievance_service import GrievanceService
from grievance_app.view.grievance_view import GrievanceView
from ML_Models.MLmodel import MLmodelsClass
from user_app.view.user_view import UserView
from io import BytesIO

commitee_name_to_c_id = {
    "Management" : 1
}


class GrievanceController:
    @staticmethod
    def add_grievance(data):
        u_id = data["u_id"]
        c_id = commitee_name_to_c_id[data["comitttee"]]
        desc = data['description']
        title = data['title']
        audio = data['blob']

        res, grievance = GrievanceService.add_grievance(u_id,c_id,desc,title,audio)
        if res:
            return GrievanceView.render_grievance(grievance)
        else:
            return GrievanceView.render_error(grievance)
        
    @staticmethod
    def convertToText(file):
        try:
            buffer = BytesIO(file.read())
            res = MLmodelsClass.speechTotext(buffer)
            print(buffer)
            if res['success']:
                return GrievanceView.render_text(res['text']),200
            else:
                print(res['error'])
                return UserView.render_error(res['error']),500
        except Exception as error:
            print(error)
            return error


        
