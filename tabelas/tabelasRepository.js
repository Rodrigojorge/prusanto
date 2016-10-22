module.exports = {

    getDAO: function(){
      return require('../db');
    },

    Motorista: function(){
      return {getTableName : 'Motorista as mot',
              getMatricula: 'mot.MATRICULA as matricula',
              getNome: 'mot.NOME as nome',
              getNomeImpresso: 'mot.NOME_IMPRESSO as nomeImpresso ',
              getCnh: 'mot.CNH as cnh ',
              getDataValidade: 'mot.DATA_VALIDADE_CNH as dataValidadeCnh ',
              getTipoCategoriaCnh: 'mot.TIPO_CATEGORIA_CNH as tipoCategoriaCnh ',
              getEndereco: 'mot.ENDERECO as endereco ',
              getBairro: 'mot.BAIRRO as bairro ',
              getTelefone: 'mot.TELEFONE as telefone ',
              getIdMunicipio: 'mot.ID_MUNICIPIO as idMunicipio ',
              getCep: 'mot.CEP as cep ',
              getCodigoCargo: 'mot.CODIGO_CARGO as codigoCargo ',
              getCodLotacao: 'mot.COD_LOTACAO  as codLotacao '}
    },

    Veiculo: function(){
      return {getTableName : 'Veiculo as vei',
              getMatricula: 'vei.PLACA as placa',
              getNome: 'vei.ANO_FABRICACAO as anoFabricacao',
              getNomeImpresso: 'vei.STATUS as status ',
              getCnh: 'vei.CHASSI as chassi ',
              getDataValidade: 'vei.DATA_VALIDADE_CNH as dataValidadeCnh ',
              getTipoCategoriaCnh: 'vei.TIPO_CATEGORIA_CNH as tipoCategoriaCnh '}
    },

/*    SELECT TOP 1000 [PLACA]
      ,[ANO_FABRICACAO]
      ,[STATUS]
      ,[CHASSI]
      ,[PLACA_MPM]
      ,[DATA_DOACAO]
      ,[COD_LOTACAO]
      ,[ID_MARCA_MODELO]
      ,[ID_COMBUSTIVEL]
      ,[DATA_COMPRA]
      ,[HODOMETRO]
      ,[KM_REVISAO]
      ,[MESES_REVISAO]
  FROM [FROTA].[dbo].[VEICULO]*/


    list: function(callback){

        var listaVeiculos = this.getDAO().list('select * from veiculo',function(rs){
            return callback(rs);
        });

    },

    listarCnhsVencidas: function(callback){

       /*
       $qb = $this->createQueryBuilder('mo');

              $qb->andwhere(' mo.lotacao = :lotacao')
                      ->setParameter('lotacao', $dados['lotacao']);

              $qb->andwhere(' mo.dataValidadeCnh <= :dataValidadeCnh')
                      ->setParameter('dataValidadeCnh', DateUtil::adicionarMeses(\DateTime::createFromFormat('d/m/Y', DateUtil::dataAtual()), 1));

              $qb->orderBy('mo.dataValidadeCnh', 'asc');

              return $qb->getQuery()->getResult();
       */
       try{
        var listaMotoristasCnhVencida = this.getDAO().list('SELECT  ' +
                                              this.Motorista().getMatricula +
                                              ' , ' +  this.Motorista().getNome +
                                              ' , ' +  this.Motorista().getNomeImpresso +
                                              ' , ' +  this.Motorista().getCnh +
                                              ' , ' +  this.Motorista().getDataValidade +
                                              ' , ' +  this.Motorista().getTipoCategoriaCnh +
                                              ' , ' +  this.Motorista().getEndereco +
                                              ' , ' +  this.Motorista().getBairro +
                                              ' , ' +  this.Motorista().getTelefone +
                                              ' , ' +  this.Motorista().getIdMunicipio +
                                              ' , ' +  this.Motorista().getCodigoCargo +
                                              ' , ' +  this.Motorista().getCep +
                                              ' , ' +  this.Motorista().getCodLotacao +
                                          ' FROM ' + this.Motorista().getTableName + '',function(rs){
            return callback(rs);
        });
      }catch(e){
        console.log('Erro na execução' + this + '    ' + e);
      }

    },

    listarVeiculosParaRevisaoFabrica: function(callback){
        callback(null);
    }

}
