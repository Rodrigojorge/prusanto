module.exports = {

    getRepository: function(){
      return require('./authorizationRepository');
    },


    listRolesByUser: function(idUsuario,callback){

      this.getRepository().listRolesByUser(idUsuario,function(error,rs){
            if (error){
              error.name = 'Erro na busca de Permissões do Usuário';
              callback(error);
            }
            return callback(null,rs);
      });
    },

    listGroupsByUser: function(idUsuario,callback){
      this.getRepository().listGroupsByUser(idUsuario,function(error,rs){
            if (error){
              error.name = 'Erro na busca de Perfis de acesso do Usuário';
              callback(error);
            }
            return callback(null,rs);
      });

    },

    getUserByLogin: function(login,callback){
      var service = this;
      this.getRepository().getUserByLogin(login,function(error,rs){
            if (error){
              return callback(error);
            }
            service.listGroupsByUser(rs.data.id,function(err,perfis){
              if (err){
                return callback(err);
              }
              rs.data.perfis = perfis.data;

              service.listRolesByUser(rs.data.id,function(err,roles){
                if (err){
                  return callback(err);
                }
                rs.data.permissoes = roles.data;

                //Retorna os registros com o usuario,perfis e papeis
                return callback(null,rs);
              });

            });

      });

    }
}
