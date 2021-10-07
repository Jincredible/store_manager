import React from 'react';
import logo from '../assets/logo.svg';
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavigationBar = () => (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/"><img src={logo} width="40px" height="40px"/>{' '}Store Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/employees">Employees</Nav.Link>
            <Nav.Link href="/clients">Clients</Nav.Link>
            <Nav.Link href="/suppliers">Suppliers</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/sales">Sales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
)


