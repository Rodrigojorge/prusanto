module.exports = {


    list: function(data,callback){

       var db = require('../db');

        var listaVeiculos = db.list('select * from veiculo',function(rs){
            return callback(rs);
        });

    },

    list2: function(data,callback){

       var db = require('../db');

        var listaVeiculos = db.list('select * from motorista',function(rs){
            return callback(rs);
        });

    }

}
