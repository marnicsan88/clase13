import React, {useEffect, useState} from 'react';
import ItemCount from './contador/ItemCount';
import {Button} from 'reactstrap';
import params from '../constants/counterParam';

const ItemDetail = (props) => {
    
    const [cantidad,setCantidad] = useState(0)
    const [cantText,setCantText] = useState("Agregar al Carrito")

    useEffect(() => {
        cantidad?setCantText(`Comprar ${cantidad}`):setCantText("Agregar al Carrito")
    },[cantidad])
    
    const onAdd = (count) => {
        setCantidad(count);
    }

    const agregarCarrito = () => {
        if(cantidad > 0)
          alert(`SE AGREGARAN ${cantidad} ${props.item.nombre}`);
        else
          alert("NO HAY NADA PARA AGREGAR");
    }

    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"3vh", maxHeight:"15rem"}}>
            <img src={props.item.image} alt={`Imagen de ${props.item.nombre}`} style={{width:"15rem",maxHeight:"100%",margin:"0.5rem"}}/>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"0.5rem"}}>
                <h1>{props.item.nombre}</h1>
                <div>{props.item.efecto}</div>
                <div style={{fontWeight:"bold"}}>{props.item.valor}</div>
                <ItemCount initial={params.initial} min={params.min} max={params.max} onAdd={onAdd} />
                <Button onClick={agregarCarrito} color="primary" className="text-center" style={{width:"100%", margin:"1px"}}>
                    {cantText}
                </Button>
            </div>        
        </div>
    )
}
export default ItemDetail;