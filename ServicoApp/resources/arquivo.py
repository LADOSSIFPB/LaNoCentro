from flask_restful import Resource, request, marshal_with, reqparse, current_app, abort, marshal
from flask import jsonify
from common.database import db
from sqlalchemy import exc
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

class ArquivosResource(Resource):

    def allowed_file(self, filename):
	    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

    # GET /arquivos
    def get(self):
        return 501
    
    # POST /arquivos
    def post(self):
        current_app.logger.info("Post - Arquivo")
        try:
            file = request.files['file']

            if file.filename == '':
                message = jsonify({'message' : 'No file selected for uploading'})
                return 400
            if file and self.allowed_file(file.filename):
                filename = secure_filename(file.filename)
                current_app.logger.info(filename)
                message = jsonify({'message' : 'File successfully uploaded'})
                return 201
            else:
                message = jsonify({'message' : 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
                return 400

        except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)
            return 500

        return 201