from flask_restful import Resource, marshal_with, reqparse, current_app, abort, marshal
from common.database import db
from sqlalchemy import exc
from models.empresa import EmpresaModel, empresa_campos
from models.endereco import EnderecoModel
from models.natureza import NaturezaModel
from models.atividade import AtividadeModel

parser = reqparse.RequestParser()
parser.add_argument('nome', required=True, help="Especifique um nome válido para a Empresa.")
parser.add_argument('natureza', type=dict, help="Especifique uma natureza válida para a Empresa.")
parser.add_argument('atividade', type=dict, help="Especifique uma atividade válida para a Empresa.")
parser.add_argument('endereco', type=dict, help="Especifique um endereço válido para a Empresa.")
parser.add_argument('email', required=True, help="Especifique um e-mail válido para a Empresa.")
parser.add_argument('telefone', required=True, help="Especifique um telefone válido para a Empresa.")
parser.add_argument('instagram', required=False, help="Especifique um instagram válido para a Empresa.")
parser.add_argument('facebook', required=False, help="Especifique um facebook válido para a Empresa.")
parser.add_argument('isDelivery', type=bool, required=True, help="Especifique um Delivery válido para a Empresa.")


class EmpresasResource(Resource):
    # GET /empresas
    @marshal_with(empresa_campos)
    def get(self):
        current_app.logger.info("Get - Empresas")
        empresas = EmpresaModel.query\
            .all()
        return empresas, 200

    # POST /empresas
    def post(self):
        current_app.logger.info("Post - Empresa")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Empresa: %s:" % (args))

            # args
            nome = args['nome']
            natureza_id = args['natureza']['id']          
            endereco_id = args['endereco']['id']
            atividade_id = args['atividade']['id']
            email = args['email']
            telefone = args['telefone']
            instagram = args['instagram']
            facebook = args['facebook']
            is_delivery = args['isDelivery']
            
            if (is_delivery is None):
                is_delivery = False        

            # Recovering existing resources
            endereco = EnderecoModel.query.filter_by(id=endereco_id).first()
            natureza = NaturezaModel.query.filter_by(id=natureza_id).first()
            atividade = AtividadeModel.query.filter_by(id=atividade_id).first()

            empresa = EmpresaModel(nome, natureza, atividade, endereco, email, telefone, instagram, facebook, is_delivery)

            # Criação da Empresa.
            db.session.add(empresa)
            db.session.commit()

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 404

        return marshal(empresa, empresa_campos), 201
# GET /empresas/<id> 
class EmpresaResource(Resource):
    @marshal_with(empresa_campos)
    def get(self, empresa_id):
        empresa = EmpresaModel.query.filter_by(id=empresa_id).first()
        if empresa is None:
            abort(404, message='Empresa {} nao existe'.format(empresa_id))
        return empresa, 200

    def put(self, empresa_id):
        current_app.logger.info("Put - Empresa")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Empresa: %s:" % args)
            # Empresa
            nome = args['nome']
            natureza_id = args['natureza']['id']          
            endereco_id = args['endereco']['id']
            atividade_id = args['atividade']['id']
            email = args['email']
            telefone = args['telefone']
            instagram = args['instagram']
            facebook = args['facebook']

            # Recovering existing resources
            endereco = EnderecoModel.query.filter_by(id=endereco_id).first()
            natureza = NaturezaModel.query.filter_by(id=natureza_id).first()
            atividade = AtividadeModel.query.filter_by(id=atividade_id).first()

            EmpresaModel.query \
                .filter_by(id=empresa_id) \
                .update(dict(nome=nome, 
                            fk_id_natureza=natureza_id, 
                            fk_id_endereco=endereco_id,
                            fk_id_atividade=atividade_id,
                            email=email, 
                            telefone=telefone, 
                            instagram=instagram, 
                            facebook=facebook))
                
            db.session.commit()

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 404

        return 204

    def delete(self, empresa_id):
        current_app.logger.info("Delete - Empresa: %s:" % empresa_id)
        try:
            EmpresaModel.query\
                .filter_by(id=empresa_id)\
                .update(dict(is_deleted=True))
            db.session.commit()

        except exc.SQLAlchemyError:
            current_app.logger.error("Exceção")
            return 404

        return 204


class EmpresaNomeResource(Resource):
    # GET /empresas/nome/<nome>
    @marshal_with(empresa_campos)
    def get(self, nome):
        current_app.logger.info("Get - Empresas por nome")
        predios = EmpresaModel.query.filter(EmpresaModel.nome.ilike('%' + nome + '%')).all()
        return predios, 200
