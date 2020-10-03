import React, {useEffect, useState,useContext} from 'react';
import ItemCount from './contador/ItemCount';
import {CartContext} from '../context/context';
import {Button} from 'reactstrap';
import params from '../constants/counterParam';
import { NavLink } from 'react-router-dom';

const ItemDetail = (props) => {
    const [cantidad,setCantidad] = useState(0)
    const [sePuedeComprar,setSePuedeComprar] = useState(false)
    const {setCart} = useContext(CartContext);
    
    useEffect(() =>{
        (cantidad >= params.min && cantidad <= params.max) ? setSePuedeComprar(true) : setSePuedeComprar(false)
    },[cantidad])

    const onAdd = (count) => {
        setCantidad(count);
    }

    const agregarCarrito = () => {
        setCart(carrito => [...carrito,{item:props.item,cantidad:cantidad}])
    }

    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"3vh", maxHeight:"15rem"}}>
            <img src={props.item.image} alt={`Imagen de ${props.item.nombre}`} style={{width:"15rem",maxHeight:"100%",margin:"0.5rem"}}/>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"0.5rem",width:"20rem"}}>
                <h1>{props.item.nombre}</h1>
                <div>{props.item.efecto}</div>
                <div style={{fontWeight:"bold"}}>${props.item.valor}</div>
                <ItemCount initial={params.initial} min={params.min} max={params.max} onAdd={onAdd} />
                <NavLink to="/">
                    <Button onClick={agregarCarrito} color="primary" disabled={!sePuedeComprar} className="text-center" style={{width:"100%", margin:"1px"}}>
                        Comprar {cantidad}
                    </Button>
                </NavLink>
            </div>        
        </div>
    )
}
export default ItemDetail;