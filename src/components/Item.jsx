import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
      <Card style={{margin:"0.5rem"}} id={props.id}>
        <CardBody>
          <CardImg top style={{maxWidth:"20rem",maxHeight:"6rem"}} src={props.image} alt="Card image cap" />
          <CardTitle className="font-weight-bolde">{props.nombre}</CardTitle>
          <CardText className="text-right font-weight-bolder">{props.precio}</CardText>
        </CardBody>
        <Button color="info">
          <NavLink to={`/item/${props.id}`} style={{color:"#fff",display:"block"}}>Ver Detalle</NavLink>
        </Button>
      </Card>
    );
  };
  
  export default Item;