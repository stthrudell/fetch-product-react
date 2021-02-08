import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Contato from './Pages/Contato/Contato';
import Produto from './Pages/Produto/Produto';
import Produtos from './Pages/Produto/Produtos';

function App() {
  return (
    <BrowserRouter basename="/fetch-product-react">
      <Header />
      <Switch>
        <Route exact path="/">
          <Produtos />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/produto/:id">
          <Produto />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
