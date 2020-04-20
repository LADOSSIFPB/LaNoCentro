from flask_restful import Resource, marshal_with, reqparse, current_app, abort, marshal
from common.database import db
from sqlalchemy import exc
from models.endereco import EnderecoModel, endereco_campos

parser = reqparse.RequestParser()
parser.add_argument('logradouro', required=True)
parser.add_argument('numero', required=True)
parser.add_argument('complemento', required=False)
parser.add_argument('cidade', required=True)
parser.add_argument('estado', required=True)
parser.add_argument('cep', required=True)
parser.add_argument('ponto_referencia', required=False)


class EnderecosResource(Resource):
    # GET /enderecos
    @marshal_with(endereco_campos)
    def get(self):
        current_app.logger.info("Get - Endereços")
        enderecos = EnderecoModel.query\
            .all()
        return enderecos, 200

    # POST /enderecos
    def post(self):
        current_app.logger.info("Post - Endereço")
        endereco = None
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Endereço: %s:" % (args))

            # args
            logradouro = args['logradouro']
            numero = args['numero']
            complemento = args['complemento']
            cidade = args['cidade']
            estado = args['estado']
            cep = args['cep']
            ponto_referencia = args['ponto_referencia']

            endereco = EnderecoModel(logradouro, numero, complemento, cidade, estado, cep, ponto_referencia)

            # Criação do Endereço.
            db.session.add(endereco)
            db.session.commit()

        except exc.SQLAlchemyError:
            current_app.logger.error("Exceção")
            return 500

        return marshal(endereco, endereco_campos), 201


class EnderecoResource(Resource):
    # GET /salas/<id>
    @marshal_with(endereco_campos)
    def get(self, endereco_id):
        current_app.logger.info("Get - Endereço: %s" % endereco_id)
        endereco = EnderecoModel.query.filter_by(id=endereco_id).first()
        if endereco is None:
            abort(404, message='Endereco {} nao existe'.format(endereco_id))

        return endereco, 200

    # PUT /salas/<id>
    def put(self, endereco_id):
        current_app.logger.info("Put - Endereço: %s:" % endereco_id)
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Endereço: %s:" % (args))

            # args
            logradouro = args['logradouro']
            numero = args['numero']
            complemento = args['complemento']
            cidade = args['cidade']
            estado = args['estado']
            cep = args['cep']
            ponto_referencia = args['ponto_referencia']

            EnderecoModel.query\
                .filter_by(id=endereco_id)\
                .update(dict(logradouro = logradouro,
                            numero = numero,
                            complemento = complemento,
                            cidade = cidade,
                            estado = estado,
                            cep = estado,
                            ponto_referencia = ponto_referencia))
            db.session.commit()

        except exc.SQLAlchemyError:
            current_app.logger.error("Exceção")
            return 404

        return 204