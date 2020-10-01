import React, {useState,useEffect} from 'react';
import { Navbar} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import Searchbox from './SearchBox'
import CartIcon from './CartIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './css/navBarStyles.css';

const NavPpal = () => {
  const [categories,setCategories] = useState([]);
  
  useEffect(() => {
    fetch('https://5f6a9065d808b90016bc1301.mockapi.io/spellmarketapi/v1/categories')
    .then(res => {
      return res.json();
    }).then(res => {
      setCategories(res);
    })
},[categories])

  const usuario = <FontAwesomeIcon icon={faUserCircle} />
  const displayFlex = "flex";
  //<NavbarBrand href="/" className="text-white">Reactive Market</NavbarBrand>
  return (
      <Navbar color="light" light expand="md" className="nav-background flex-space-between" style={{display:displayFlex}}>
        <NavLink to="/" className="text-white icon-link px-1 px-sm-3 px-md-4">
          <img src="https://imagizer.imageshack.com/img922/9889/P9I7Vu.png" alt="Reactive Market Logo" className="d-none d-sm-block"/>
          <img src="https://imagizer.imageshack.com/img923/6550/2RSH3p.png" alt="Reactive Market Logo" className="d-block d-sm-none"/>
        </NavLink>
        <Searchbox categorias={categories} />
        <div style={{display:displayFlex, justifyContent:"center"}}>
          <NavLink to="/cart" className="text-white icon-link px-1 px-sm-3 px-md-4"><CartIcon/></NavLink>
          <NavLink to="/" className="text-white icon-link px-1 px-sm-3 px-md-4">{usuario}</NavLink>
        </div>
      </Navbar>
  );
}

export default NavPpal;