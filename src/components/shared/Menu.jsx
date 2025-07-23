import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header>
        <Navbar expand="lg" className="colorNav">
          <Container>
            <Navbar.Brand className="fuenteLogo color-logo-nav">
              Xtream
            </Navbar.Brand>
            <Form className="w-50 d-flex justify-content-center">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Buscar"
                    className="buscadorNav"
                  />
                </Col>
              </Row>
            </Form>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="boton-hamburguesa"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex justify-content-end w-100 nav-link">
                <NavLink to={"/"} className="tinos nav-link">
                  Inicio
                </NavLink>
                <NavLink to={"/login"} className="tinos nav-link">
                  Login
                </NavLink>
                <NavLink to={"/administrador"} className="tinos nav-link">
                  Administrador
                </NavLink>
                <Button className="tinos nav-link boton-crea-cuenta" onClick={handleShow}>
                  Crea tu cuenta
                </Button>
                <Button className="tinos nav-link boton-logout w-25">
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Menu;
