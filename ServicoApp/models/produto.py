from common.database import db
from flask_restful import fields
from sqlalchemy.ext.orderinglist import ordering_list
from sqlalchemy.sql import func
from models.empresa import EmpresaModel, empresa_campos


produto_campos = {
    'id': fields.Integer(attribute='id'),
    'nome': fields.String(attribute='nome'),
    'descricao': fields.String(attribute='descricao'),
    'preco': fields.String(attribute='preco'),
    'isVisivel': fields.Boolean(attribute='is_visivel'),
    'isDeleted': fields.Boolean(attribute='is_deleted'),
    'empresa' : fields.Nested(empresa_campos)
}


'''
    Classe Produto.
'''
class ProdutoModel(db.Model):
    __tablename__ = 'tb_produto'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    descricao = db.Column(db.Text())
    preco = db.Column(db.Float(precision='3,2'))
    is_visivel = db.Column(db.Boolean, default=False)
    is_deleted = db.Column(db.Boolean, default=False)
    dt_insercao = db.Column(db.DateTime, default=func.current_timestamp())

    fk_id_empresa = db.Column(db.Integer, db.ForeignKey('tb_empresa.id'),
        nullable=False)
    empresa = db.relationship('EmpresaModel', backref='empresa', primaryjoin="ProdutoModel.fk_id_empresa==EmpresaModel.id", uselist=False)

    def __init__(self, nome, descricao, preco, is_visivel, is_deleted, empresa):
        self.nome = nome
        self.descricao = descricao
        self.preco = preco
        self.is_visivel = is_visivel
        self.is_deleted = is_deleted
        self.empresa = empresa

    def __str__(self):
        return '<Produto %r>'%(self.nome)
