import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavPpal from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemDetailContainer from './pages/ItemDetailContainer';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavPpal/>
        <Switch>
          <Route exact path="/">
            <Home greeting="Bienvenido" nombre="Tincho"/>
          </Route>
          <Route path="/item/:idItem">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
