import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomeProduto from './componentes/home/HomeProduto.component';
import ListagemProduto from './componentes/produto/ListagemProduto.component';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link className="nav-link" to="/listagemProduto">Produtos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={HomeProduto}/>
        <Route path="/listagemProduto" component={ListagemProduto}/>
      </Switch>
    </Router>
  );
}

export default App;
