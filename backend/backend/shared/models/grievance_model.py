from shared.utils.db_utils import db
from datetime import datetime
from sqlalchemy.orm import relationship
from shared.models.user_model import User
from shared.models.committe_model import Committee
from sqlalchemy.dialects.mysql import LONGBLOB


class Grievance(db.Model):
    __tablename__ = 'grievance'

    g_id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(50))
    time_stamp = db.Column(db.DateTime, default=datetime.utcnow)
    text = db.Column(db.Text)
    audio = db.Column(LONGBLOB) 
    u_id = db.Column(db.Integer, db.ForeignKey('user.u_id'), nullable=False)
    c_id = db.Column(db.Integer, db.ForeignKey('committee.c_id'), nullable=False)

    user = relationship('User', backref='grievances', foreign_keys=[u_id])
    committee = relationship('Committee', backref='grievances', foreign_keys=[c_id])
