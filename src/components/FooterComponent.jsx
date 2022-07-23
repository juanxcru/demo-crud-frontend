import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import Dropdown from 'react-bootstrap/Dropdown'
class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <Navbar  variant="dark" bg="dark" className="justify-content-center">
            <Nav>
              <Nav.Item>
                <Nav.Link href="https://github.com/juanxcru">Github</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
