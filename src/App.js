import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import NavPpal from './components/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div>
      <NavPpal/>
      <ItemDetailContainer />
    </div>
  )
  /*return (
    <div>
      <NavPpal/>
      <Home greeting="Bienvenido" nombre="Tincho"/>
    </div>
  );*/
  /*return (
    <div>
      <BrowserRouter>
        <NavPpal/>
        <Switch>
          <Route exact path="/">
            <UserForm/>
          </Route>
          <Route path="/que/:userId">
            <Home greeting="Bienvenido" nombre="Tincho"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );*/
}

export default App;
