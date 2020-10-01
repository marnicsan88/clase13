import React from 'react'
import {Container, Row, Col} from 'reactstrap';

export default function CartItem(props){
    return(
        <Container>
            <Row style={{alignItems:"center",borderBottom:"2px solid #A7B",padding:"0.5rem",boxSizing:"border-box",justifyContent:"space-between"}}>
                <Col className="col-sm-2" style={{padding:"0.5rem"}}>
                    <img src={props.item.image} style={{width:"7rem",height:"7rem"}}  alt="Imagen Item"/>
                </Col>
                <Col className="col-sm-10" style={{height:"100%"}}>
                    <Container>
                        <Row style={{alignItems:"center",padding:"0.5rem",boxSizing:"border-box",justifyContent:"space-between"}}>
                            <Col className="col-md-4">
                                <div style={{fontWeight:"bolder",color:"#007185"}}>{props.item.nombre}</div>
                            </Col>
                            <Col className="col-md-4">
                                <div>Cant.: {props.cantidad}</div>
                            </Col>
                            <Col className="col-md-4">
                                <div style={{fontWeight:"bolder"}}>${props.item.valor}</div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}