var express = require('express');
var bodyParser = require('body-parser');
var ntlm = require('express-ntlm');
//var qs = require('qs')

//var bodyParser = express.bodyParser();

var app = express();
/*
app.use(ntlm({
    debug: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log.apply(null, args);
    },
    domain: 'REDEMPM',
    domaincontroller: 'ldap://srv05/cn=usuario.consulta,ou=servicos,ou=dti,ou=pgjm,dc=redempm,dc=mpu'
    //baseDn:'cn=usuario.consulta,ou=servicos,ou=dti,ou=pgjm,dc=redempm,dc=mpu'
    /*
    'ldapHostname' => 'srv05',
   'ldapPort' => '389',
   'ldapDn' => 'cn=usuario.consulta,ou=servicos,ou=dti,ou=pgjm,dc=redempm,dc=mpu',
   'ldapPassword' => 'usuario.consulta',
   'ldapDc' => 'dc=redempm,dc=mpu',
   */
//}));

//app.use(express.static('../public'));

app.use('/prusanto', express.static('../public_html'));

// parse application/x-www-form-urlencoded
//,reviver:function(k,v){JSON.parse(v)}}
app.use(bodyParser.urlencoded({ extended: true ,inflate:false,strict:false}))

//app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded' }))
// parse application/json
//app.use(bodyParser.json())


/*app.get('/frota/', function (req, res) {

    //var service = require('./' + req.params.modulo + '/' + req.params.entidade +  'Service');

    res.redirect('../public/index.html');

});*/

/*app.all('*', function(request, response) {
    response.end(JSON.stringify(request.ntlm)); // {"DomainName":"MYDOMAIN","UserName":"MYUSER","Workstation":"MYWORKSTATION"}
});*/

app.post('/frotaApp/auth/:acao', function (req, res) {

    var authorization = require('./conf/authorization/authorizationService');

    authorization.getUserByLogin(req.ntlm.UserName,function(err,rs){
      if (err){
        //res.send({success:false,message:err.name,stack:err.stack,name:err.name});
        res.status(401).send();
      }else{
        res.send(rs);
      }

    });


});

app.post('/frotaApp/:modulo/:acao', function (req, res) {


    var service = require('./app/' + req.params.modulo + '/' + req.params.modulo +  'Service');
    //var service = require('./tabelas/tabelasService.js');
    //console.log('tes');
    //var data = json_decode(JSON.parse(req.body));
    var data = req.body;//req.body;

console.dir('usuario: ' + req.ntlm);
    console.log(data);
    console.dir(req.params);

  try{
      switch (req.params.acao){
  //res.status(500).send
          case 'getCombustivelById' :

              service.getCombustivelById(JSON.parse(data.data),function(err,lista){
                    if (err) {
                        if (res.headersSent){
                            return err;
                        }
                        res.send({success:false,message:err.name,stack:err.stack,name:err.name});
                      }else{
                          res.send(lista);
                      }
              });

          break;

          default:
              eval('service.' + req.params.acao + '(null,function(err,lista){' +
                                                        'if (err) {' +
                                                            'if (res.headersSent){ ' +
                                                                'return err;' +
                                                            '}' +
                                                            'res.send({success:false,message:err.name,stack:err.stack,name:err.name});' +
                                                          '}else{' +
                                                              'res.send(lista);' +
                                                          '}' +
                                                  '});');
          break;

      }
    }catch(e){
      console.log(e.stack);
      res.status(500).send('Operação não permitida! \n' + e);
    }

});

/*app.get('/frota/:modulo/:entidade/:acao', function (req, res) {

    var service = require('./' + req.params.modulo + '/' + req.params.entidade +  'Service');


    switch (req.params.acao){

        /*case 'list' : service.list(function(lista){
                            res.send(lista);
                        });
        break;

        case 'insert' : service.insert(function(lista){
                            res.send(lista);
                        });
        break;*/

    /*    default: eval('service.' + req.params.acao + '(function(lista){res.send(lista);});');
            //res.send('Operação não permitida');
            //res.send('Operação não permitida');
        break;

    }


    //res.send('ok');

});*/

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

function json_decode(str_json) {
  //       discuss at: http://phpjs.org/functions/json_decode/
  //      original by: Public Domain (http://www.json.org/json2.js)
  // reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: T.J. Leahy
  //      improved by: Michael White
  //        example 1: json_decode('[ 1 ]');
  //        returns 1: [1]

  /*
    http://www.JSON.org/json2.js
    2008-11-19
    Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    See http://www.JSON.org/js.html
  */

  var json = JSON;
  if (typeof json === 'object' && typeof json.parse === 'function') {
    try {
      return json.parse(str_json);
    } catch (err) {
      if (!(err instanceof SyntaxError)) {
        throw new Error('Unexpected error type in json_decode()');
      }
      this.php_js = this.php_js || {};
      this.php_js.last_error_json = 4; // usable by json_last_error()
      return null;
    }
  }

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var j;
  var text = str_json;

  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.
  cx.lastIndex = 0;
  if (cx.test(text)) {
    text = text.replace(cx, function(a) {
      return '\\u' + ('0000' + a.charCodeAt(0)
        .toString(16))
        .slice(-4);
    });
  }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.
  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
  if ((/^[\],:{}\s]*$/)
    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

    // In the third stage we use the eval function to compile the text into a
    // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
    // in JavaScript: it can begin a block or an object literal. We wrap the text
    // in parens to eliminate the ambiguity.
    j = eval('(' + text + ')');

    return j;
  }

  this.php_js = this.php_js || {};
  this.php_js.last_error_json = 4; // usable by json_last_error()
  return null;
}
