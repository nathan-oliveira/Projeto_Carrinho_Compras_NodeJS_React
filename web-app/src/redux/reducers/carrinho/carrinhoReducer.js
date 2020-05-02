import {
  ADICIONAR_ITEM_CARRINHO,
  REMOVER_ITEM_CARRINHO,
  LISTAR_ITENS_CARRINHO,
  INCREMENTAR_QTDE,
  DECREMENTAR_QTDE
} from '../../actions/carrinho/actionsTypes';

const defaultState = {
  itens: []
}

export default function carrinhoReducer(state = defaultState, action) {
  switch (action.type) {
    case ADICIONAR_ITEM_CARRINHO:
      let produto = state.itens.length.filter((produto) => {
        return (produto.id_produto == action.data.id_produto)
      })

      if(produto.length == 0) {
        action.data.qtde = 1;

        return Object.assign({}, state, {
          itens: [
            ...state.itens,
            action.data
          ]
        })
      } else {
        return state;
      }

    case REMOVER_ITEM_CARRINHO:
      return Object.assign({}, state, {
        itens: state.itens.filter((produto) => {
          return (produto.id_produto != action.data.id_produto)
        })
      })

    case LISTAR_ITENS_CARRINHO:
      return state;

    case INCREMENTAR_QTDE:
      return Object.assign({}, state, {
        itens: state.itens.map((produto) => {
          if(produto.id_produto == action.data.id_produto ) {
            produto.qtde += 1;
          }
          return produto;
        })
      })

    case DECREMENTAR_QTDE:
      return Object.assign({}, state, {
        itens: state.itens.map((produto) => {
          if(produto.id_produto == action.data.id_produto ) {
            produto.qtde -= 1;
          }
          return produto;
        })
      })

    default:
      return state;
  }
}