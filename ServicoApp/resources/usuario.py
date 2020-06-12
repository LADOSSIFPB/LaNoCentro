from flask_restful import Resource, marshal_with, reqparse, current_app, abort
from flask import g
from common.auth import auth
from common.database import db
from sqlalchemy import exc, and_
from flask import jsonify
from werkzeug.security import generate_password_hash
from models.usuario import usuario_campos, login_campos, UsuarioModel

parser = reqparse.RequestParser()
parser.add_argument('login', required=True)
parser.add_argument('senha', required=True)

class UsuariosResource(Resource):
    @auth.login_required
    @marshal_with(usuario_campos)
    def get(self):
        current_app.logger.info("Get - Usuarios")
        usuarios = UsuarioModel.query\
            .all()
        return usuarios, 200

    # POST /usuarios
    @auth.login_required 
    def post(self):
        current_app.logger.info("Post - Usuario")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Usuario: %s:" % (args))

            # args
            login = args['login']
            senha = args['senha']
            usuario = UsuarioModel(login, senha)

            # Criação do Evento.
            db.session.add(usuario)
            db.session.commit()

        except exc.SQLAlchemyError:
            current_app.logger.error("Exceção")

        return 204

class LoginResource(Resource):

    # POST /login
    @marshal_with(login_campos)
    def post(self):
        current_app.logger.info("Post - Login")
        try:
            # Parser JSON
            args = parser.parse_args()

            # args
            login = args['login']
            senha = args['senha']
            usuario = UsuarioModel.query.filter_by(login=login)\
                .first()

            if usuario is None:
                # Usuário não encontrado.
                abort(404)
            elif(usuario.verificar_senha(senha)):
                # Usuário autorizado.
                usuario.generate_auth_token()
                current_app.logger.info(usuario.token)
            else:
                # Não autorizado
                abort(401)

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)

        return usuario, 200

    # GET /login
    @auth.login_required
    def get(self):
        token = g.user.generate_auth_token()
        return jsonify({'token': token.decode('ascii')})
