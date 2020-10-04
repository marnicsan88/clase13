import React, { useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './css/item.css'

const Item = (props) => {
    useEffect(()=>{
      console.log(props);
    },[])
    return (
      <Card className={props.categoria} style={{margin:"0.5rem",height:"15rem",width:"15rem"}} id={props.id}>
        <CardBody style={{boxSizing:"borde-box"}}>
          <CardImg top style={{boxSizing:"borde-box",width:"10rem",height:"6rem"}} src={props.image} alt="Card image cap" />
          <CardTitle className="font-weight-bolde">{props.nombre}</CardTitle>
          <CardText className="text-right font-weight-bolder">${props.precio}</CardText>
        </CardBody>
        <Button color="info" style={{padding:"0"}}>
          <NavLink to={`/item/${props.id}`} style={{color:"#fff",display:"block",padding:".375rem .75rem"}}>Ver Detalle</NavLink>
        </Button>
      </Card>
    );
  };
  
  export default Item;