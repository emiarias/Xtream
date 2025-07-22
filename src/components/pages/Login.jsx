import { Col, Form, Row, Button } from "react-bootstrap";
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
          <Form className="raleway" onSubmit={handleSubmit((e)=>e.preventDefault)}>
            <Form.Group className="mt-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juan2025@mail.com"
                {...register("email", {
                  required: "El correo electrónico es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo electrónico debe tener un formato válido, por ejemplo juan2025@mail.com",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Recordar mi usuario y contraseña"
              ></Form.Check>
            </Form.Group>
            <Button variant="success" type="submit" className="mt-4">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default Login;
