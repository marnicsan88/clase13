import React, {useContext} from 'react';
import {CartContext} from '../../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartIcon = () => {
  const [cart,setCart] = useContext(CartContext);
  return (
    cart.length?<span className="badge badge-light"><FontAwesomeIcon icon={faShoppingCart} />&nbsp;{cart.length}</span>:<FontAwesomeIcon icon={faShoppingCart} />
  );
}

export default CartIcon;