import { combineReducers } from 'redux';

import carrinhoReducer from './carrinho/carrinhoReducer';

const reducers = {
  carrinhoStore: carrinhoReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
