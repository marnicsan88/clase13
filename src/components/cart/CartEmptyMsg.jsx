import React from 'react';
import {Link} from "react-router-dom"

export default function CartEmptyMsg(){
    return(
        <div>
            <h1 style={{marginTop:"3rem",fontWeight:"bolder"}}>El Carrito está vacío</h1>
            <Link to="/">Volver al Inicio</Link>
        </div>
    )
}