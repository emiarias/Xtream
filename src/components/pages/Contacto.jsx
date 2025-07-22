import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="container">
      <h1 className="my-5 text-center tinos">Contacto</h1>
      <Row xs={1} md={2}>
        <Col className="mb-3">
          <Form
            className="raleway"
            onSubmit={handleSubmit((e) => e.preventDefault)}
          >
            <Form.Group>
              <Form.Label>Nombre y apellido*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Perez"
                {...register("nombre", {
                  required: "El nombre es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener un mínimo de 2 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "El nombre debe tener un máximo de 100 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Correo electrónico*</Form.Label>
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
                  minLength: {
                    value: 4,
                    message: "El correo electrónico debe tener un mínimo de 4 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "El correo electrónico debe tener un máximo de 100 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Teléfono*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: +543813444100"
                {...register("telefono", {
                  required: "El número de teléfono es un dato obligatorio",
                  pattern: {
                    value: /^\+\d{1,4} ?\d{6,14}$/,
                    message:
                      "El número de teléfono debe comenzar con '+', seguido del código de país y el número sin espacios ni símbolos. Ej: +541112345678",
                  },
                  minLength: {
                    value: 8,
                    message: "El número de teléfono debe tener un mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 19,
                    message: "El correo electrónico debe tener un máximo de 19 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>País*</Form.Label>
              <Form.Select
                {...register("pais", {
                  required: "Debe seleccionar un país",
                })}
              >
                <option value="">Seleccione una opcion</option>
                <option value="ar">🇦🇷 Argentina</option>
                <option value="bo">🇧🇴 Bolivia</option>
                <option value="cl">🇨🇱 Chile</option>
                <option value="co">🇨🇴 Colombia</option>
                <option value="cr">🇨🇷 Costa Rica</option>
                <option value="cu">🇨🇺 Cuba</option>
                <option value="do">🇩🇴 República Dominicana</option>
                <option value="ec">🇪🇨 Ecuador</option>
                <option value="sv">🇸🇻 El Salvador</option>
                <option value="es">🇪🇸 España</option>
                <option value="gt">🇬🇹 Guatemala</option>
                <option value="hn">🇭🇳 Honduras</option>
                <option value="mx">🇲🇽 México</option>
                <option value="pe">🇵🇪 Perú</option>
                <option value="us">🇺🇸 Estados Unidos</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.pais?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Ingrese su consulta*</Form.Label>
            </Form.Group>
            <Button variant="success" type="submit" className="mt-4">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
        <Col>
          <img
            src="https://ca-times.brightspotcdn.com/dims4/default/f507332/2147483647/strip/true/crop/3000x2000+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F08%2Fa2%2Fe47e812707a40774a24e6e8f6657%2F95ecd52380214c35b1cca6dbc1d8a643"
            alt="Últimos estrenos de 2025"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Contacto;
