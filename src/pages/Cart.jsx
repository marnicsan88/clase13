import React, {useContext} from 'react';
import CartDetail from "../components/cart/CartDetail"
import ErrorMsg from "../components/ErrorMsg"
import {CartContext} from "../context/context"


export default function Cart(){
    const {cart} = useContext(CartContext);
    return(
        <div style={{textAlign:"center"}}>
            {!cart.length?<ErrorMsg msg="El Carrito está Vacío" />:<CartDetail />}
        </div>
    )
}