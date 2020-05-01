from common.database import db
from flask_restful import fields
from sqlalchemy.ext.orderinglist import ordering_list


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

    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return '<Natureza %s>'%(self.nome)
