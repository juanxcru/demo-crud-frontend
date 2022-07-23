import React, { Component } from "react";
import UserService from '../services/UserService';
class ListUsersComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }
  componentDidMount(){
    UserService.getUsers().then( (res)  => this.setState({users: res.data})); // devuelve el promise




  }
  render() {
    return (
      <div>
        <h2 className="text-center"> Lista de usuarios </h2>
        <div className="row">
          <table className="table table-striped table-bordered table-dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Edad</th>
                <th>ID</th>
                <th>Editar / Borrar</th>
              </tr>
            </thead>

            <tbody>
              {
              
                this.state.users.map((users) => (
                <tr key={users.id}>
                  <td>{users.nombre}</td>
                  <td>{users.apellido}</td>
                  <td>{users.email}</td>
                  <td>{users.edad}</td>
                  <td>{users.id}</td>
                
                </tr>
              ))}


            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListUsersComponent;
