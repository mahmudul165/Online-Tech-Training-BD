import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="">Online Tech Course BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <NavLink to="/home">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/services">Services</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/instructor">Instructor</NavLink>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
