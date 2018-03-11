import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="brand-title">
              {this.props.titleline}
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav navbar-nav">
            <li><Link to="/">Desarrolladores</Link></li>
          </ul>
          <Nav pullRight>
            <NavItem href="https://empleolaravel.com" target="_blank">
              Empleo Laravel Website
            </NavItem>
            <NavItem href="https://medium.com/dockerizando" target="_blank">
              Dockerizando.io
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
