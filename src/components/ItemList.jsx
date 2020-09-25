import React, {useState, useEffect} from 'react';
import {Col} from 'reactstrap';
import Item from './Item';

export default function ItemList(props){
  return(
    <div>
      {props.data.map(item =>
          {let res = <Col key={item.id}><Item id={item.id} nombre={item.nombre} precio={item.valor} image={item.image}/></Col>;
          return res;}

      )}
    </div>
  )
}