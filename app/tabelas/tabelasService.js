module.exports = {

    getRepository: function(){
      return require('./tabelasRepository');
    },


    list: function(data,callback){

      var listaVeiculos =  this.getRepository().list(function(error,rs){
            if (error){
                callback(error);
            }
            return callback(null,rs);
      });

    },

    listarCombustivel: function(data,callback){
      var listaMotoristasCnhVencida = this.getRepository().listarCombustivel(function(error,rs){
            if (error){
              error.name = 'Erro na busca Combustíveis';
              callback(error);
            }
            return callback(null,rs);
      });

    },

    getCombustivelById: function(data,callback){
      console.log('id: ' + data.id);
      var listaMotoristasCnhVencida = this.getRepository().getCombustivelById(data,function(error,rs){
            if (error){
              error.name = 'Erro na busca de Combustível por ID';
              callback(error);
            }
            return callback(null,rs);
      });

    },

    listarCnhsVencidas: function(data,callback){
      var listaMotoristasCnhVencida = this.getRepository().listarCnhsVencidas(function(error,rs){
            if (error){
              error.name = 'Erro na busca de CNHs vencidas';
              callback(error);
            }
            return callback(null,rs);
      });

    },

    listarVeiculosParaRevisaoFabrica: function(data,callback){
      var listaMotoristasCnhVencida = this.getRepository().listarVeiculosParaRevisaoFabrica(function(rs){
            return callback(rs);
      });

    }

}
