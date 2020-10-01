import React, {useContext} from 'react';
import CartDetail from "../components/cart/CartDetail"
import CartEmptyMsg from "../components/cart/CartEmptyMsg"
import {CartContext} from "../context/context"


export default function Cart(){
    const {cart} = useContext(CartContext);
    return(
        <div style={{textAlign:"center"}}>
            {!cart.length?<CartEmptyMsg />:<CartDetail />}
        </div>
    )
}