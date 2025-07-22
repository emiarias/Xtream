import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg" className="colorNav">
        <Container>
          <Navbar.Brand href="#home" className="fuenteLogo color-logo-nav">Xtream</Navbar.Brand>
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
              <Nav.Link href="#home" className="fuenteLogo">Inicio</Nav.Link>
              <Nav.Link href="#link" className="fuenteLogo">Login</Nav.Link>
              <Nav.Link href="#" className="fuenteLogo">Crea tu cuenta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
