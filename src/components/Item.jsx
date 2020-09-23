import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import CounterFinal from '../components/CounterFinal';

const Item = (props) => {
    const onAdd = (count) => {
      if(count > 0)
        alert(`SE AGREGARAN ${count} ${props.nombre}`);
      else
        alert("NO HAY NADA PARA AGREGAR");
    }

    return (
      <Card style={{margin:"0.5rem"}}>
        <CardBody>
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
          <CardTitle className="font-weight-bolde">{props.nombre}</CardTitle>
          <CardText>{props.autor}</CardText>
          <CardText className="text-right font-weight-bolder">{props.precio}</CardText>
        </CardBody>
      </Card>
    );
  };
  
  export default Item;