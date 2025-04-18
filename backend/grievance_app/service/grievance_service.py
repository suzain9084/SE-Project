from shared.utils.db_utils import db
from shared.models.grievance_model import Grievance
import datetime

class GrievanceService:
    @staticmethod
    def add_grievance(u_id,c_id,desc,title,audio):
        try:
            new_grievance = Grievance(u_id=u_id,c_id=c_id,audio=audio,desc=desc,status='pending',time_stamp=datetime.datetime.now(),title=title)
            db.session.add(new_grievance)
            db.session.commit()
            return True, new_grievance
        except Exception as error:
            db.session.rollback()
            return False, str(error)
