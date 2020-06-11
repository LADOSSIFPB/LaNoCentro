from flask_restful import current_app
from sqlalchemy import exc
from common.database import db
from models.empresa import EmpresaModel, empresa_campos
import requests
import datetime
import string


def load_profile_photos():

    current_app.logger.info("Load profile photo - Instagram")

    try:
        query = db.session.query(EmpresaModel).filter_by(is_deleted=False)

        empresas = query.all()

        for empresa in empresas:
            current_app.logger.info("Empresa - {nome}".format(nome=empresa.nome))
            
            user_instagram = empresa.instagram

            if (user_instagram):
                r = requests.get('https://www.instagram.com/{user_instagram}/?__a=1'\
                    .format(user_instagram=user_instagram))
                if(r.status_code==200):
                    json = r.json()
                    user_photo_url_instagram = json['graphql']['user']['profile_pic_url_hd']
                    
                    current_app.logger.info("Get {user_instagram} - {user_photo_url_instagram}"\
                        .format(user_instagram=user_instagram,\
                            user_photo_url_instagram=user_photo_url_instagram))
                    
                    EmpresaModel.query \
                        .filter_by(id=empresa.id) \
                        .update(dict(user_photo_url_instagram=user_photo_url_instagram))                
                    
                    db.session.commit()
                    current_app.logger.info("Update - {user_instagram}".format(user_instagram))

    except exc.SQLAlchemyError as e:
            current_app.logger.error("Exceção")
            current_app.logger.error(e)

def run():
    load_profile_photos()    