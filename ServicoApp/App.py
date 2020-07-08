from flask import Flask, Blueprint
from flask_restful import Api
from flask_cors import CORS
from common.settings import *
from common.logging import *
from resources.usuario import *
from resources.endereco import *
from resources.contato import *
from resources.empresa import *
from resources.cidade import *
from resources.estado import *
from resources.natureza import *
from resources.atividade import *
from resources.arquivo import *
from resources.hello_world import *
from resources.produto import *

import sql
import instagram

app = Flask(__name__)

# Settings
app.config['DEBUG'] = DEBUG
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS
app.config['SQLALCHEMY_BINDS'] = SQLALCHEMY_BINDS
app.config['SQLALCHEMY_ECHO'] = SQLALCHEMY_ECHO
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024


# Configure logging
handler = logging.FileHandler(LOGGING_LOCATION)
handler.setLevel(LOGGING_LEVEL)
formatter = logging.Formatter(LOGGING_FORMAT)
handler.setFormatter(formatter)
app.logger.addHandler(handler)

db.init_app(app)

api_bp = Blueprint('api', __name__)
api = Api(api_bp, prefix='/lanocentro/api')

# Recursos
api.add_resource(HelloWorld, '/')

api.add_resource(UsuariosResource, '/usuarios')
api.add_resource(LoginResource, '/login')

api.add_resource(EnderecosResource, '/enderecos')
api.add_resource(EnderecoResource, '/enderecos/<endereco_id>')

api.add_resource(ContatosResource, '/contatos')
api.add_resource(ContatoResource, '/contatos/<contato_id>')
api.add_resource(ContatoAtenderResource, '/contatos/<contato_id>/atender')

api.add_resource(EmpresasResource, '/empresas')
api.add_resource(EmpresaResource, '/empresas/<empresa_id>')
api.add_resource(EmpresaNomeResource, '/empresas/nome/<nome>')

api.add_resource(CidadesResource, '/cidades')
api.add_resource(CidadeResource, '/cidades/<cidade_id>')

api.add_resource(EstadosResource, '/estados')
api.add_resource(EstadoResource, '/estados/<estado_id>')

api.add_resource(NaturezasResource, '/naturezas')
api.add_resource(NaturezaResource, '/naturezas/<natureza_id>')

api.add_resource(AtividadesResource, '/atividades')
api.add_resource(AtividadeResource, '/atividades/<atividade_id>')

api.add_resource(ProdutosResource, '/produtos')
api.add_resource(ProdutoResource, '/produtos/<produto_id>')

api.add_resource(ArquivosResource, '/arquivos')

# Blueprints para Restful.
app.register_blueprint(api_bp)

# CORS - requisição multi-clients
cors = CORS(app, resources={r"/lanocentro/api/*": {"origins": "*"}})

# Iniciando estrutura do banco de dados.
@app.cli.command("create_db")
def create_db():
    sql.run()

# Carregando url das imagens do perfil do instagram.
@app.cli.command("import_profile_pic_instagram")
def import_profile_pic_instagram():
    instagram.run()

if __name__ == '__main__':
    app.run(threaded=True)
