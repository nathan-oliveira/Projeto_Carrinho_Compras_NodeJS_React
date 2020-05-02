import { Config } from '../classes/Config';
import axios from 'axios';

const caminho = `${Config.getUrlApi().toString()}/produto/`

export default class ProdutoService {
  constructor() {

  }

  static listaTodos() {
    return fetch(caminho).then(response => {
      return response.json();
    })
  }
}