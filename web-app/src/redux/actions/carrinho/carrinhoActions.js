import {
  ADICIONAR_ITEM_CARRINHO,
  REMOVER_ITEM_CARRINHO,
  LISTAR_ITENS_CARRINHO,
  INCREMENTAR_QTDE,
  DECREMENTAR_QTDE
} from './actionsTypes';

export const actionAdicionarItemCarrinho = (data) => {
  return {
    type: ADICIONAR_ITEM_CARRINHO,
    data
  }
}

export const actionRemoverItemCarrinho = (data) => {
  return {
    type: REMOVER_ITEM_CARRINHO,
    data
  }
}

export const actionListarItensCarrinho = () => {
  return {
    type: LISTAR_ITENS_CARRINHO
  }
}

export const actionIncrementarQtdeItem = (data) => {
  return {
    type: INCREMENTAR_QTDE,
    data
  }
}

export const actionDecrementarQtdeItem = (data) => {
  return {
    type: DECREMENTAR_QTDE,
    data
  }
}