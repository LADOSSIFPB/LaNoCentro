from flask_restful import Resource, marshal_with, reqparse, current_app, abort, marshal
from common.database import db
from sqlalchemy import exc
from models.natureza import NaturezaModel, natureza_campos

parser = reqparse.RequestParser()
parser.add_argument('tipo', required=True, help="Especifique um tipo válido para a Natureza.")

class NaturezasResource(Resource):
    # GET /naturezas
    @marshal_with(natureza_campos)
    def get(self):
        current_app.logger.info("Get - Naturezas")
        naturezas = NaturezaModel.query\
            .all()
        return naturezas, 200

    # POST /naturezas
    def post(self):
        current_app.logger.info("Post - Natureza")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Natureza: %s:" % (args))

            # args
            tipo = args['tipo']

            natureza = NaturezaModel(tipo)

            # Criação da Natureza.
            db.session.add(natureza)
            db.session.commit()

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 500

        return marshal(natureza, natureza_campos), 201

class NaturezaResource(Resource):
    # GET /naturezas/<id>
    @marshal_with(natureza_campos)
    def get(self, natureza_id):
        current_app.logger.info("Get - Natureza: %s" % natureza_id)
        natureza = NaturezaModel.query.filter_by(id=natureza_id).first()
        if natureza is None:
            abort(404, message='Natureza {} nao existe'.format(natureza_id))

        return natureza, 200
