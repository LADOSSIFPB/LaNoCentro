from flask_restful import Resource, marshal_with, reqparse, current_app, abort, marshal
from common.database import db
from sqlalchemy import exc
from models.atividade import AtividadeModel, atividade_campos

parser = reqparse.RequestParser()
parser.add_argument('nome', required=True, help="Especifique um nome válido para a Atividade.")

class AtividadesResource(Resource):
    # GET /atividades
    @marshal_with(atividade_campos)
    def get(self):
        current_app.logger.info("Get - Atividades")
        atividades = AtividadeModel.query\
            .all()
        return atividades, 200
    
    # POST /atividades
    def post(self):
        current_app.logger.info("Post - Atividade")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Atividade: %s:" % (args))

            # args
            nome = args['nome']

            atividade = AtividadeModel(nome)

            # Criação do Contato.
            db.session.add(atividade)
            db.session.commit()

        except exc.SQLAlchemyError:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 500

        return marshal(atividade, atividade_campos), 201

class AtividadeResource(Resource):
    # GET /atividades/<id>
    @marshal_with(atividade_campos)
    def get(self, atividade_id):
        current_app.logger.info("Get - Atividade: %s" % atividade_id)
        atividade = AtividadeModel.query.filter_by(id=atividade_id).first()
        if atividade is None:
            abort(404, message='Atividade {} nao existe'.format(atividade_id))

        return atividade, 200
