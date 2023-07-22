import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavB() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbarClass">
        <Container id="contain">
          <Navbar.Brand href="/">Netflix Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">FavList</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}