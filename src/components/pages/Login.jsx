import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="container">
      <h1 className="my-3 text-center tinos">Inicia sesión</h1>
      <Row xs={1} md={2}>
        <Col>
          <Form className="raleway">
            <Form.Group className="mt-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juan2025@mail.com"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Recordar mi usuario y contraseña"
              ></Form.Check>
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default Login;
