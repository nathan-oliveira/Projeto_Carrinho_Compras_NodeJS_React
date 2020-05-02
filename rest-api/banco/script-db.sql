CREATE SCHEMA db_vendas;

CREATE TABLE db_vendas.produto (
  id_produto INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NULL,
  caminho_imagem TEXT NULL,
  preco NUMERIC(7,2) NULL,
  PRIMARY KEY(id_produto)
);

INSERT INTO db_vendas.produto(nome, caminho_imagem, preco)
VALUES('Programador FullStack 1', '', 19.99);

INSERT INTO db_vendas.produto(nome, caminho_imagem, preco)
VALUES('Programador FullStack 2', '', 29.99);

INSERT INTO db_vendas.produto(nome, caminho_imagem, preco)
VALUES('Programador FullStack 3', '', 39.99);

INSERT INTO db_vendas.produto(nome, caminho_imagem, preco)
VALUES('Programador FullStack 4', '', 49.99);

INSERT INTO db_vendas.produto(nome, caminho_imagem, preco)
VALUES('Programador FullStack 5', '', 69.99);