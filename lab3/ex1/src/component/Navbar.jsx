import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavBar({ onOpenProfile }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        {/* Logo hoặc tiêu đề */}
        <Navbar.Brand href="/"> MyMovies</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          {/* Các link chính */}
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* Dropdown Account */}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={onOpenProfile}>
                Build Your Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-profile">Manage Your Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Quick Search form */}
          <Form className="d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Quick search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
    
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
