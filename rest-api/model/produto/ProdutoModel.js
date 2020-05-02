const db = require('../../banco/dbConexao');

module.exports = class ProdutoModel {
  static getTodos(callback) {
    return db.query('SELECT * FROM produto', callback);
  }

  static getId(id, callback) {
    return db.query('SELECT * FROM produto WHERE id_produto = ?', [id], callback);
  }

  static adicionar(dados, callback) {
    return db.query('INSERT INTO produto(nome, caminho_imagem, preco) VALUES(?, ?, ?)', [dados.nome, dados.caminho_imagem, dados.preco], callback);
  }

  static editar(dados, callback) {
    if(dados.caminho_imagem != null) {
      return db.query('UPDATE produto SET nome = ?, caminho_imagem = ?, preco = ? WHERE id_produto = ?', [dados.nome, dados.caminho_imagem, dados.preco, dados.id_produto], callback);
    } else {
      return db.query('UPDATE produto SET nome = ?, preco = ? WHERE id_produto = ?', [dados.nome, dados.preco, dados.id_produto], callback);
    }
  }

  static deletar(id, callback) {
    return db.query('DELETE FROM produto WHERE id_produto = ?', [id], callback);
  }
}