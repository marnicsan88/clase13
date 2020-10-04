import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const AddCartButton = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const agregar = () => {
        props.agregarCarrito()
        toggle()
    }

    return (
        <>
            <Button onClick={agregar} color="primary" disabled={!props.sePuedeComprar} className="text-center" style={{width:"100%", margin:"1px"}}>
                Agregar al Carrito {props.cantidad}
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{textAlign:"center"}}>
                    Producto agregado al carrito
                </ModalHeader>
                <ModalBody style={{textAlign:"center", display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <FontAwesomeIcon style={{color:"#218838",fontSize:"1.5rem"}} icon={faCheckCircle} /> &emsp;
                    <label style={{marginBottom:"0"}}>Se han agregado al carrito: <span>{props.cantidad}x {props.nombreItem}</span></label>
                </ModalBody>
                <ModalFooter>
                    <NavLink exact to="/cart">
                        <Button color="primary">Ir al Carrito</Button>{' '}
                    </NavLink>
                    <Button color="secondary" onClick={toggle}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default AddCartButton;