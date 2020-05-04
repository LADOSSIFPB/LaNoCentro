from flask_restful import current_app
from common.database import db
import datetime
import string
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, Sequence, exc

def create_db():
    db.create_all()

def run():
    create_db()
