import React, {useContext} from 'react';
import CartDetail from "../components/CartDetail"
import {CartContext} from "../context/context"

export default function Cart(){
    const {cart} = useContext(CartContext);
    return(
        <div style={{textAlign:"center"}}>
            {!cart.length?<h1 style={{marginTop:"3rem",fontWeight:"bolder"}}>El Carrito está vacío</h1>:<CartDetail />}
        </div>
    )
}