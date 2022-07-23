import React, { Component } from "react";
import Table from "react-bootstrap/table";
import UserService from "../services/UserService";

class ListUsersComponentRB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((res) => this.setState({ users: res.data })); // devuelve el promise
  }
  render() {
    return (
      <div>

        <div className="container" >
        <h2 className="text-center" > Lista de Usuarios </h2>
        </div>
    
        <Table responsive striped bordered hover variant="dark">
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
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
        
      </div>
    );
  }
}
export default ListUsersComponentRB;
