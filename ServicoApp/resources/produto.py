from flask_restful import Resource, marshal_with, reqparse, current_app, abort, marshal
from common.database import db
from sqlalchemy import exc, and_
from models.produto import ProdutoModel, produto_campos
from models.empresa import EmpresaModel

parser = reqparse.RequestParser()
parser.add_argument('nome', required=True, help="Especifique um nome válido para o Produto.")
parser.add_argument('descricao', required=True, help="Especifique uma descricao válida para o Produto.")
parser.add_argument('preco', required=True, help="Especifique um preço válido para o Produto.")
parser.add_argument('isVisivel', type=bool, help="Especifique um é visível válido para o Produto.")
parser.add_argument('isDeleted', type=bool, help="Especifique um é deletado válido para o Produto.")
parser.add_argument('empresa', type=dict, required=True, help="Especifique uma empresa válida para o Produto.")

class ProdutosResource(Resource):
    # GET /produtos
    @marshal_with(produto_campos)
    def get(self):
        current_app.logger.info("Get - Produtos")

        parser_param = reqparse.RequestParser()
        parser_param.add_argument('nome', type=str, required=False, help='Especifique um nome do Produto válido.')
        args = parser_param.parse_args()

        nome = args.get('nome')

        query = db.session.query(ProdutoModel).filter_by(is_deleted=False)

        if(nome):
            current_app.logger.info("Nome %s "%(nome))
            query = query.filter(and_(ProdutoModel.nome.ilike('%' + nome + '%')))

        produtos = query.all()

        return produtos, 200

    # POST /produtos
    def post(self):
        current_app.logger.info("Post - Produto")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Produto: %s:" % (args))

            # args
            nome = args['nome']
            descricao = args['descricao']
            preco = args['preco']
            is_visivel = args['isVisivel']
            is_deleted = args['isDeleted']
            empresa_id = args['empresa']['id']

            # Recovering existing resources
            empresa = EmpresaModel.query.filter_by(id=empresa_id).first()

            produto = ProdutoModel(nome, descricao, preco, is_visivel, is_deleted, empresa)

            # Criação do Produto.
            db.session.add(produto)
            db.session.commit()

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 404

        return marshal(produto, produto_campos), 201

class ProdutoResource(Resource):
    # GET /produtos/<id>
    @marshal_with(produto_campos)
    def get(self, produto_id):
        current_app.logger.info("Get - Produto: %s" % produto_id)
        produto = ProdutoModel.query.filter_by(id=produto_id).first()
        if produto is None:
            abort(404, message='Produto {} nao existe'.format(produto_id))

        return produto, 200

    def put(self, produto_id):
        current_app.logger.info("Put - Produto")
        try:
            # Parser JSON
            args = parser.parse_args()
            current_app.logger.info("Produto: %s:" % args)
            # Produto
            nome = args['nome']
            descricao = args['descricao']
            preco = args['preco']
            is_visivel = args['isVisivel']
            is_deleted = args['isDeleted']
            empresa_id = args['empresa']['id']

            ProdutoModel.query \
                .filter_by(id=produto_id) \
                .update(dict(nome=nome,
                            descricao=descricao,
                            preco=preco,
                            is_visivel=is_visivel,
                            is_deleted=is_deleted,
                            fk_id_empresa=empresa_id
                            ))

            db.session.commit()

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 404

        return 204