import React from 'react';
import CounterFinal from './contador/CounterFinal';

const ItemDetail = (props) => {
    const onAdd = (count) => {
        if(count > 0)
          alert(`SE AGREGARAN ${count} ${props.item.nombre}`);
        else
          alert("NO HAY NADA PARA AGREGAR");
    }

    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"3vh"}}>
            <img src={props.item.image} style={{maxWidth:"20rem",minHeight:"100%",margin:"0.5rem"}}/>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"0.5rem"}}>
                <h1>{props.item.nombre}</h1>
                <div>{props.item.efecto}</div>
                <div style={{fontWeight:"bold"}}>{props.item.valor}</div>
                <CounterFinal initial="1" min="1" max="10" onAdd={onAdd} />
            </div>        
        </div>
    )
}
export default ItemDetail;