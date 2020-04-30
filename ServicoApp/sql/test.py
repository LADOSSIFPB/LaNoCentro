import os
import mysql.connector

class ConnectMysql(object):

    def __init__(self, db_name=""):
        try:
            # conectando...
            self.conn = mysql.connector.connect(host="localhost", user="root", passwd="ifpbinfo", database="lanocentro")
            self.cursor = self.conn.cursor()
            print("Banco:", self.conn.database)
            self.cursor.execute('SELECT VERSION()')
            self.data = self.cursor.fetchone()
            print("MySQL version: %s" % self.data)
        except sqlite3.Error:
            print("Erro ao abrir banco.")

    def CommitDb(self):
        if self.conn:
            self.conn.commit()

    def CloseDb(self):
        if self.conn:
            self.conn.close()
            print("Conexão fechada.")

if __name__ == '__main__':
    db = ConnectMysql()