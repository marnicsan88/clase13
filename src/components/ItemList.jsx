import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Item from './Item';

export default function ItemList({data}){
  return(
    <Container fluid={true}>
      <Row xs="1" sm="2" md="3" lg="4" className="justify-content-md-center" style={{textAlign:"center"}}>
        {data.map(item =><Col style={{display:"flex",justifyContent:"center"}} key={item.id}><Item id={item.id} nombre={item.nombre} precio={item.valor} image={item.image} categoria={item.categoria}/></Col>)}
      </Row>
    </Container>
  )
}