import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Userform = (props) => {
    
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="nombreUsuario">Nombre</Label>
              <Input type="text" name="nombre" id="nombreUsuario" required className="w-50"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="apellidoUsuario">Apellido</Label>
              <Input type="text" name="apellido" id="apellidoUsuario" required className="w-50"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="telefonoUsuario">Teléfono</Label>
              <Input type="text" name="telefono" id="telefonoUsuario" className="w-50"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="emailUsuario">E-mail</Label>
              <Input type="email" name="email" id="emailUsuario" className="w-50"/>
            </FormGroup>
          </Col>
        </Row>
        <Button><Link to={"/que"} style={{color:"#fff",fontDecoration:"none"}}>Grabar</Link></Button>
      </Form>
    );
  }
export default Userform;