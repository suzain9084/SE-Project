from shared.utils.db_utils import db

class User(db.Model):
    __tablename__ = 'user'

    u_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    address = db.Column(db.String(200))
    city = db.Column(db.String(100))
    country = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    phone = db.Column(db.String(15))
    password = db.Column(db.String(500))


