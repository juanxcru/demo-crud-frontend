import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
//import Dropdown from 'react-bootstrap/Dropdown'
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
        <header>

        <Navbar variant="dark" bg="dark">
          <Container fluid>
            <Navbar.Brand href=".">
              <img
                src="https://pbs.twimg.com/media/D9_ud76WsAEenI-.jpg"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" variant="dark">
              <Nav className="me-auto">
                <NavDropdown title="Opciones" id="nav-dropdown-dark" menuVariant="dark">
                  <NavDropdown.Item href="#action/3.1">
                    Agregar Usuario
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Eliminiar Usuario
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Mostrar Usuarios{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        </header>
        
        </div>
   
    );
  }
}

export default HeaderComponent;
