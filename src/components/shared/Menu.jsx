import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { NavLink } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Modal from "react-bootstrap/Modal";

const Menu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
                <Button
                  className="tinos nav-link boton-crea-cuenta"
                  onClick={handleShow}
                >
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
          <Modal.Title>
            ¿Quieres ver Xtream ya? completa los campos para crear una cuenta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit((e) => e.preventDefault)}>
            <FormGroup className="mb-3" controlId="formBasicNombreUsuario">
              <FormLabel>
                Nombre Usuario
              </FormLabel>
              <FormControl
                type="text"
                placeholder="ej: user1">
              </FormControl>
            </FormGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: Xtream@gmail.com"
                maxLength={100}
                min={5}
                {...register("email", {
                  required: "El correo electrónico es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo electrónico debe tener un formato válido, por ejemplo juan2025@mail.com",
                  },
                  minLength: {
                    value: 5,
                    message:
                      "La descrición amplia debe tener almenos 5 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "La descrición amplia debe tener como máximo 100 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>
            <FormGroup className="d-flex justify-content-end">
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Menu;
