import React, { Component } from "react";
import history from "../services/history.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        apellido: '',
        email: '',
        edad: ''
    };
    this.editNombre = this.editNombre.bind(this);
    this.editApellido = this.editApellido.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.editEdad = this.editEdad.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  editNombre = (evt) => {
    
    this.setState({ nombre: evt.target.value });

  }
  editApellido = (evt) => {
    
    this.setState({ apellido: evt.target.value });

  }
  editEdad = (evt) => {
    
    this.setState({ edad: evt.target.value });

  }
  editEmail = (evt) => {
    
    this.setState({ email: evt.target.value });

  }

  saveUser = (evt) => {
    evt.preventDefault();
    let user = {nombre: this.state.nombre, apellido: this.state.apellido, email: this.state.email, edad: this.state.edad, otraCosa: 87};
   console.log(user);
   UserService.createUser(user).then(response => {
    console.log(response);
    history.push("/");
  }); 

  }

  cancel = (evt) => {

    history.push("/");

  }



  render() {
    return (
      <div className="mt-4 mb-4">
        <Container>
          
          
          <Row>
             
             
              <Col md={{span: 8 ,offset: 2}} >
                 <Card>
                  <Card.Header as="h2" className="text-center">Crear Usuario</Card.Header>
                
            
                  <Form>
                  <Card.Body>
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese su nombre" value={this.state.nombre} onChange={this.editNombre} />
                      <Form.Text className="text-muted">Ingrese su/s nombre/s con mayúsculas al inicio</Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control required type="text" placeholder="Ingrese su apellido" value={this.state.apellido} onChange={this.editApellido} />
                      <Form.Text className="text-muted">Ingrese su/s apellido/s con mayúsculas al inicio</Form.Text>
                      
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="email" placeholder="unejemplo@unmail.com" value={this.state.email} onChange={this.editEmail} />
                      <Form.Text className="text-muted">Ingrese su email de uso personal</Form.Text>
                      
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Edad</Form.Label>
                      <Form.Control required type="number" placeholder="25" value={this.state.edad} onChange={this.editEdad} />
                      <Form.Text className="text-muted">Ingrese su edad</Form.Text>
                      
                    </Form.Group>

                    </Card.Body>
                  
                  
                  <Card.Footer >
                    <Stack direction="horizontal" gap={5}>
                    <Button variant="outline-primary" type="submit" onClick={this.saveUser} >
                    Guardar
                    </Button>{' '}
                    <Button  variant="outline-danger" type="button" onClick={this.cancel} >
                    Cancelar
                    </Button>
                    </Stack>
                  </Card.Footer>
                  </Form>
                  </Card>
              </Col>
          </Row>
          </Container>
      </div>
    );
  }
}

export default CreateUserComponent;
