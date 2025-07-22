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
          <Navbar.Brand href="#home">Xtream</Navbar.Brand>
          <Form className="w-50 d-flex justify-content-center">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="bg-white"
                />
              </Col>
            </Row>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end w-100">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#">Crea tu cuenta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
