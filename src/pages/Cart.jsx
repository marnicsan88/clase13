import React, {useContext} from 'react';
import {CartContext} from "../context/context"

export default function Cart(){
    const [cart,setCart] = useContext(CartContext);
    return(
        <div style={{textAlign:"center"}}>
            <h1>EL CARRITO</h1>
            {cart.map(cartItem => <div><div>{cartItem.item.nombre}</div><div>{cartItem.cantidad}</div></div>)}
        </div>
    )
}