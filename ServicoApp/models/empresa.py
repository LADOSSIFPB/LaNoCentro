from common.database import db
from flask_restful import fields
from sqlalchemy.ext.orderinglist import ordering_list
from resources.endereco import EnderecoModel, endereco_campos
from resources.natureza import NaturezaModel, natureza_campos
from sqlalchemy.sql import func


empresa_campos = {
    'id': fields.Integer(attribute='id'),
    'nome': fields.String(attribute='nome'),
    'natureza': fields.Nested(natureza_campos),
    'endereco': fields.Nested(endereco_campos),
    'email': fields.String(attribute='email'),
    'telefone': fields.String(attribute='telefone'),
    'instagram': fields.String(attribute='instagram'),
    'facebook': fields.String(attribute='facebook'),
    'isDelivery': fields.Boolean(attribute='is_delivery'),
    'isDeleted': fields.Boolean(attribute='is_deleted')
}


'''
    Classe Empresa.
'''
class EmpresaModel(db.Model):
    __tablename__ = 'tb_empresa'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    telefone = db.Column(db.String(13), nullable=False)
    instagram = db.Column(db.String(255), nullable=True)
    facebook = db.Column(db.String(255), nullable=True)
    is_delivery = db.Column(db.Boolean, default=False)
    is_deleted = db.Column(db.Boolean, default=False)
    dt_insercao = db.Column(db.DateTime, default=func.current_timestamp())

    fk_id_endereco = db.Column(db.Integer, db.ForeignKey('tb_endereco.id'),
        nullable=False)
    endereco = db.relationship('EnderecoModel', backref='endereco', primaryjoin="EmpresaModel.fk_id_endereco==EnderecoModel.id", uselist=False)

    fk_id_natureza = db.Column(db.Integer, db.ForeignKey('tb_natureza.id'), nullable=False)
    natureza = db.relationship('NaturezaModel', backref='natureza', primaryjoin="EmpresaModel.fk_id_natureza==NaturezaModel.id", uselist=False)

    
    def __init__(self, nome, natureza, endereco, email, telefone, instagram, facebook, is_delivery):
        self.nome = nome
        self.natureza = natureza
        self.endereco = endereco
        self.email = email
        self.telefone = telefone
        self.instagram = instagram
        self.facebook = facebook
        self.is_delivery = is_delivery

    def __str__(self):
        return '<Empresa %r>'%(self.nome) 