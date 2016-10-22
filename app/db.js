module.exports = {

        getConfig : function() {
            return {user: 'frota',
                    password: 'frotta',
                    server: 'srv79', //server: 'srv79', // You can use 'localhost\\instance' to connect to named instance
                    database: 'FROTA',

                    options: {
                        encrypt: false // Use this if you're on Windows Azure
                    }
            }
        },

        list : function(sqlQuery,callback){

                var sql = require('mssql');

                var connection = new sql.Connection(this.getConfig(), function(err) {
                    // ... error checks
                    if (err){
                        console.log('erro conexao com o banco de dados: ' + err);
                        callback(err);
                    }

                    // Query
                    var request = new sql.Request(connection); // or: var request = connection.request();

                    request.query(sqlQuery, function(err, recordset) {
                        // ... error checks
                        if (err){
                            console.log('erro na execução do comando SQL: ' + err);
                            callback(err);
                        }
                        callback(null,{'data':recordset});

                    });

                });
                connection.on('error', function(err) {
                    console.log('on error:' + err);
                });

        }


}
