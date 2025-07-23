import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router";

const Menu = ({adminUser}) => {
  return (
    <header>
      <Navbar expand="lg" className="colorNav">
        <Container>
          <Navbar.Brand  as={Link} to={"/"} className="fuenteLogo color-logo-nav">Xtream</Navbar.Brand>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="boton-hamburguesa" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100 nav-link">
              <NavLink to={"/"} className="tinos nav-link">Inicio</NavLink>
              {
               adminUser? (
                <>
                <NavLink to={"/administrador"} className="tinos nav-link">Administrador</NavLink>
                <Button className="tinos nav-link boton-logout w-25">Logout</Button>
                </>
               ) : (
                <>
                <NavLink  to={"/login"} className="tinos nav-link">Login</NavLink>
                <Button className="tinos nav-link">Crea tu cuenta</Button>
                </>
               )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
