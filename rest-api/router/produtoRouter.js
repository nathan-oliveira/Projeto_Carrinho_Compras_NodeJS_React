var express = require('express');
var router = express.Router();
var produtoModel = require('../model/produto/ProdutoModel');
var RespostaClass = require('../model/RespostaClass');

var fs = require('fs');
var pastaPublic = './public/arquivos/';

router.get('/', function(req, resp, next) {
  produtoModel.getTodos(function(erro, retorno) {
    let resposta = new RespostaClass();

    if(erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro';
      console.log('erro: ', erro)
    } else {
      resposta.dados = retorno;
    }

    resp.json(resposta);
  });
})

router.get('/:id?', function(req, resp, next) {
  produtoModel.getId(req.params.id, function(erro, retorno) {
    let resposta = new RespostaClass();

    if(erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro';
      console.log('erro: ', erro)
    } else {
      resposta.dados = retorno;
    }

    resp.json(resposta);
  });
})

router.post('/', function(req, resp, next) {
  let resposta = new RespostaClass();

  // verificar se recebeu uma imagem
  if(req.body.dados_imagem != null) {
    // salvar imagem
    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    let dataAtual = Date().toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/-/g, '').replace(/ /g, '')

    let nomeImagemCaminho = pastaPublic + dataAtual + req.body.dados_imagem.nome_arquivo;

    fs.writeFileSync(nomeImagemCaminho, bitmap);

    req.body.caminho_imagem = nomeImagemCaminho

    produtoModel.adicionar(req.body, function(erro, retorno) {
      let resposta = new RespostaClass();
      if(erro) {
        resposta.erro = true;
        resposta.msg = 'Ocorreu um erro';
        console.log('erro: ', erro)
      } else {
        if(retorno.affectedRows > 0) {
          resposta.msg = 'Cadastro realizado com sucesso';
        } else {
          resposta.erro = true;
          resposta.msg = 'Não foi possível realizar a operação';
          console.log('erro: ', erro)
        }

        resposta.dados = retorno;
      }

      resp.json(resposta);
    });
  } else {
    resposta.erro = true;
    resposta.msg = 'Não foi enviado uma imagem';
    console.log('erro',  resposta.msg)
    resp.json(resposta);
  }
})

router.put('/', function(req, resp, next) {
  let resposta = new RespostaClass();

  // verificar se recebeu uma imagem
  if(req.body.dados_imagem != null) {
    // salvar imagem
    let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

    let dataAtual = Date().toLocaleString().replace(/\//g, '').replace(/:/g, '').replace(/-/g, '').replace(/ /g, '')

    let nomeImagemCaminho = pastaPublic + dataAtual + req.body.dados_imagem.nome_arquivo;

    fs.writeFileSync(nomeImagemCaminho, bitmap);

    req.body.caminho_imagem = nomeImagemCaminho
  }
  produtoModel.editar(req.body, function(erro, retorno) {
    if(erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro';
      console.log('erro: ', erro)
    } else {
      if(retorno.affectedRows > 0) {
        resposta.msg = 'Registro alterado com sucesso';
      } else {
        resposta.erro = true;
        resposta.msg = 'Não foi possível realizar a operação';
        console.log('erro: ', erro)
      }

      //resposta.dados = retorno;
    }

    resp.json(resposta);
  });
})

router.delete('/:id', function(req, resp, next) {
  let resposta = new RespostaClass();
  produtoModel.deletar(req.params.id, function(erro, retorno) {
    if(erro) {
      resposta.erro = true;
      resposta.msg = 'Ocorreu um erro';
      console.log('erro: ', erro)
    } else {
      if(retorno.affectedRows > 0) {
        resposta.msg = 'Registro deletado com sucesso';
      } else {
        resposta.erro = true;
        resposta.msg = 'Não foi possível realizar a operação';
        console.log('erro: ', erro)
      }
    }
    resp.json(resposta);
  });
})

module.exports = router;