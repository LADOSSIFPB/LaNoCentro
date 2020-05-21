from common.database import db
from flask_restful import fields
from sqlalchemy.ext.orderinglist import ordering_list
from models.endereco import EnderecoModel, endereco_campos
from models.natureza import NaturezaModel, natureza_campos
from models.atividade import AtividadeModel, atividade_campos
from sqlalchemy.sql import func


empresa_campos = {
    'id': fields.Integer(attribute='id'),
    'nome': fields.String(attribute='nome'),
    'natureza': fields.Nested(natureza_campos),
    'atividade': fields.Nested(atividade_campos),
    'endereco': fields.Nested(endereco_campos),
    'email': fields.String(attribute='email'),
    'telefone': fields.String(attribute='telefone'),
    'instagram': fields.String(attribute='instagram'),
    'facebook': fields.String(attribute='facebook'),
    'latitude': fields.String(attribute='latitude'),
    'longitude': fields.String(attribute='longitude'),
    'isTempoRealMaps': fields.Boolean(attribute='is_tempo_real_maps'),    
    'isDelivery': fields.Boolean(attribute='is_delivery'),
    'isPrefeitura': fields.Boolean(attribute='is_prefeitura'),
    'isDeleted': fields.Boolean(attribute='is_deleted'),
    'isVisivel': fields.Boolean(attribute='is_visivel')    
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
    latitude = db.Column(db.Numeric(10,8), nullable=True)
    longitude = db.Column(db.Numeric(11,8), nullable=True)
    is_tempo_real_maps = db.Column(db.Boolean, default=False)
    is_delivery = db.Column(db.Boolean, default=False)
    is_prefeitura = db.Column(db.Boolean, default=False)
    is_visivel = db.Column(db.Boolean, default=False)
    is_deleted = db.Column(db.Boolean, default=False)
    dt_insercao = db.Column(db.DateTime, default=func.current_timestamp())

    fk_id_endereco = db.Column(db.Integer, db.ForeignKey('tb_endereco.id'),
        nullable=False)
    endereco = db.relationship('EnderecoModel', backref='endereco', primaryjoin="EmpresaModel.fk_id_endereco==EnderecoModel.id", uselist=False)

    fk_id_natureza = db.Column(db.Integer, db.ForeignKey('tb_natureza.id'), nullable=False)
    natureza = db.relationship('NaturezaModel', backref='natureza', primaryjoin="EmpresaModel.fk_id_natureza==NaturezaModel.id", uselist=False)

    fk_id_atividade = db.Column(db.Integer, db.ForeignKey('tb_atividade.id'), nullable=False)
    atividade = db.relationship('AtividadeModel', backref='atividade', primaryjoin="EmpresaModel.fk_id_atividade==AtividadeModel.id", uselist=False)


    def __init__(self, nome, natureza, atividade, endereco, email, telefone, instagram, facebook,\
        latitude, longitude, is_tempo_real_maps, is_delivery, is_prefeitura, is_visivel):
        self.nome = nome
        self.natureza = natureza
        self.atividade = atividade
        self.endereco = endereco
        self.email = email
        self.telefone = telefone
        self.instagram = instagram
        self.facebook = facebook
        self.latitude = latitude
        self.longitude = longitude
        self.is_tempo_real_maps = is_tempo_real_maps
        self.is_delivery = is_delivery
        self.is_prefeitura = is_prefeitura
        self.is_visivel = is_visivel

    def __str__(self):
        return '<Empresa %r>'%(self.nome) 