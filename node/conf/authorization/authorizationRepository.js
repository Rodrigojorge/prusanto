module.exports = {

  getDAO: function(){
    return require('../../app/db');
  },

  getUserByLogin: function(login,callback){

      var sqlQuery = 'SELECT ID_USUARIO as id ' +
                                  ',matricula ' +
                                  ',matricula_completa as matriculaCompleta ' +
                                  ',login ' +
                                  ',ID_TIPO_SERVIDOR as tipoServidor ' +
                                  ',nome ' +
                                  ',email ' +
                                //  ' ,password ' +
                                //  ' ,salt ' +
                                  ',cargo ' +
                                  ',lotacao_id as  idLotacao ' +
                                  ',codLotacao ' +
                                  ',lotacao_sigla as siglaLotacao ' +
                                  //',lotacao_descricao as descricaoLotacao '
                              'FROM SEGURANCA_USUARIO WHERE login = \'sadsa' + login + '\'';

      this.getDAO().list(sqlQuery,function(error,rs){
        if (error){
          return callback(error);
        }
        if (rs.data.length<=0){
          return callback(new Error('Usuário sem permissão de acesso ao sistema'));
        }
        return callback(null,{data:rs.data[0]});
      });

  },

  listRolesByUser: function(idUsuario,callback){

      var sqlQuery = 'SELECT ID_PERMISSAO as id '+
                              ',ID_USUARIO as usuario '+
                              ',PERFIL as perfil '+
                              ',id_recurso as idRecurso '+
                              ',recurso '+
                              ',recurso_descricao as recursoDescricao '+
                              ',acao '+
                              'FROM SEGURANCA_USUARIO_PERMISSAO WHERE ID_USUARIO = ' + idUsuario;

      this.getDAO().list(sqlQuery,function(error,rs){
        if (error){
            callback(error);
        }
        return callback(null,rs);
      });

  },

  listGroupsByUser: function(idUsuario,callback){

    var sqlQuery = 'SELECT PERFIL as id '+
                            ',ID_USUARIO as usuario '+
                            ',nome '+
                            'FROM SEGURANCA_USUARIO_PERFIL WHERE ID_USUARIO = ' + idUsuario;

    this.getDAO().list(sqlQuery,function(error,rs){
      if (error){
          callback(error);
      }
      return callback(null,rs);
    });

  }

}
