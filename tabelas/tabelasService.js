module.exports = {

    getRepository: function(){
      return require('./tabelasRepository');
    },


    list: function(callback){

      var listaVeiculos =  this.getRepository().list(function(rs){
            return callback(rs);
      });

    },

    listarCnhsVencidas: function(callback){
      try{
        var listaMotoristasCnhVencida = this.getRepository().listarCnhsVencidas(function(rs){
              return callback(rs);
        });
      }catch(e){
          console.log('asdsad');
      }

    },

    listarVeiculosParaRevisaoFabrica: function(callback){
      var listaMotoristasCnhVencida = this.getRepository().listarVeiculosParaRevisaoFabrica(function(rs){
            return callback(rs);
      });

    }

}
