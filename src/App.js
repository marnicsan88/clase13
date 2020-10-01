import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavPpal from './components/navBar/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemDetailContainer from './pages/ItemDetailContainer';
import {CartProvider} from './context/context';

import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavPpal/>
          <Switch>
            <Route exact path="/">
              <Home greeting="Bienvenido" nombre="Tincho"/>
            </Route>
            <Route exact path="/item/:idItem">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
