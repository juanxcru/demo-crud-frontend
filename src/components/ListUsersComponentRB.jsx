import React, { Component } from "react";
import history from "../services/history.js";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/table";
import UserService from "../services/UserService";
import Stack from 'react-bootstrap/Stack';

class ListUsersComponentRB extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }
  componentDidMount() {
    UserService.getUsers().then((res) => this.setState({ users: res.data })); // devuelve el promise desde el servicio get
  }

  addUser() {

    history.push(`/crear-usuario`);
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="container-fluid" >
          <h2 className="text-center mt-3" > Lista de Usuarios </h2>
        </div>
        <div className="container-fluid">
            <Button variant="outline-dark" onClick={this.addUser} >Agregar Usuario </Button>{''}
            <br/>
            <br />
        </div> 

        <Table  responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Edad</th>

              <th>Editar / Borrar</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.nombre}</td>
                <td>{users.apellido}</td>
                <td>{users.email}</td>
                <td>{users.edad}</td>
                <td>
                  <Stack direction="horizontal"> 
                  <Button className="mx-auto px-3" variant="outline-light" onClick={() => history.push(`/editar-usuario/${users.id}`)}>Editar</Button>{' '}
                  <Button className="mx-auto px-3" variant="outline-danger" onClick={() => history.push(`/editar-usuario/${users.id}`)}>Borrar</Button>{' '}
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>
    );
  }
}
export default ListUsersComponentRB;