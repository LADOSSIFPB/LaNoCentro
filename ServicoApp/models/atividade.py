from common.database import db
from flask_restful import fields
from sqlalchemy.ext.orderinglist import ordering_list
from sqlalchemy.sql import func


atividade_campos = {
    'id': fields.Integer(attribute='id'),
    'nome': fields.String(attribute='nome')
}


'''
    Classe Atividade da empresa.
'''
class AtividadeModel(db.Model):
    __tablename__ = 'tb_atividade'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    dt_insercao = db.Column(db.DateTime, default=func.current_timestamp())

    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return '<Atividade %s>'%(self.nome)
