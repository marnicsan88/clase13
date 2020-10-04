import React, {useContext} from 'react';
import CartItem from "./CartItem"
import {CartContext} from "../../context/context"
import {Container, Row, Col, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function CartDetail(){
    const {cart,calcularTotal} = useContext(CartContext);
    return(
        <>
            <h1 style={{marginTop:"1.5rem",textDecoration:"underline"}}>MI CARRITO</h1>
            <Container>
                <Row xs="1" md="12" className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col className="col-md-8">
                        {cart.map(cartItem => <CartItem item={cartItem.item} cantidad={cartItem.cantidad}/>)}
                    </Col>
                    <Col className="col-md-4">
                        <div style={{paddingBottom:"1.5rem",paddingLeft:"2rem",paddingRight:"3rem",boxSizing:"border-box",border:"1px solid #a45087"}}>
                            <h2>Total</h2>
                            <div style={{textAlign:"right",marginTop:"1rem",marginBottom:"1rem"}}><h4 style={{fontWeight:"bold"}}>${(calcularTotal()).toFixed(2)}</h4></div>
                            <NavLink to="/checkout">
                                <Button color="danger" style={{width:"100%"}}>Finalizar Compra</Button>
                            </NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}