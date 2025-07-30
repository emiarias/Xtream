import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
  
const Menu = ({ adminUser, setAdminUser, terminoBusqueda, setTerminoBusqueda }) => {

    const handleInputMenuChange = (e) => {
    setTerminoBusqueda(e.target.value)
  }

  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const termsRef = useRef(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckboxChange = (e) => {
    setAceptarTerminos(e.target.checked);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navegacion = useNavigate();

  const logOut = () => {
    Swal.fire({
      title: "Tu sesión se está por cerrar",
      text: "Estás seguro de esto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesión cerrada",
          text: "Nos vemos la próxima.",
        });
        setAdminUser(false);
        sessionStorage.removeItem("userKey");
        navegacion("/");
      }
    });
  };

  return (
    <>
      <header>
        <Navbar expand="lg" className="colorNav">
          <Container>
            <Navbar.Brand
              as={Link}
              to={"/"}
              className="fuenteLogo color-logo-nav"
            >
              Xtream
            </Navbar.Brand>
            <Form className="w-50 d-flex justify-content-center">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Buscar Pelicula/Serie"
                    className="buscadorNav"
                    onChange={handleInputMenuChange}
                    value={terminoBusqueda}
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
                {adminUser ? (
                  <>
                    <NavLink to={"/administrador"} className="tinos nav-link">
                      Administrador
                    </NavLink>
                    <Button
                      className="tinos nav-link boton-logout w-25"
                      onClick={logOut}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <NavLink to={"/login"} className="tinos nav-link">
                      Login
                    </NavLink>
                    <Button
                      className="tinos nav-link boton-crea-cuenta"
                      onClick={handleShow}
                    >
                      Crea tu cuenta
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100 tinos">
            ¿Quieres ver Xtream ya?
            <br /> ¡Crea tu cuenta en 3 pasos!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit(() => {
              Swal.fire({
                title: "Cuenta Creada!",
                text: "Tu cuenta ha sido creada exitosamente!",
                icon: "success",
              });
              reset();
              handleClose();
            })}
          >
            <FormGroup className="mb-3" controlId="formBasicNombreUsuario">
              <FormLabel>Nombre Usuario</FormLabel>
              <FormControl
                type="text"
                placeholder="Ej: user1"
                maxLength={10}
                min={5}
                {...register("text", {
                  required: "El nombre de usuario es un dato obligatorio",
                  pattern: {
                    message:
                      "El nombre debe tener entre 8 y 16 caracteres, al menos un dígito",
                  },
                })}
              ></FormControl>
              <Form.Text className="text-danger">
                {errors.text?.message}
              </Form.Text>
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
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                maxLength={16}
                min={8}
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <hr />
            <FormGroup>
              <div
                ref={termsRef}
                className="terminos-condiciones"
              >
                <p className="Raleway">
                  <strong>📜 Términos y Condiciones de Uso – Xtream </strong>
                  <br />
                  Bienvenido a Xtream, una aplicación que permite a los usuarios
                  explorar, ver y gestionar contenido audiovisual. Al acceder o
                  utilizar Xtream, usted acepta cumplir con los siguientes
                  términos y condiciones. Si no está de acuerdo con ellos, por
                  favor no utilice la aplicación.
                </p>
                <ol>
                  <li>
                    <strong>🧾Aceptacion de los Terminos: </strong><br />
                    Al utilizar Xtream, usted reconoce haber leído, entendido
                    y aceptado estos Términos y Condiciones, así como nuestra
                    Política de Privacidad.
                  </li>
                  <li className="my-1">
                    <strong>🎬Uso de la Aplicacion: </strong><br />
                    Xtream está destinada exclusivamente para uso personal y no
                    comercial. - El contenido disponible en Xtream es propiedad
                    de sus respectivos titulares de derechos. No se permite la
                    reproducción, distribución o modificación sin autorización.
                    - Usted se compromete a no utilizar Xtream para actividades
                    ilegales, fraudulentas o que infrinjan derechos de terceros.
                  </li>
                  <li className="my-1">
                    <strong>👤 Registro y Cuenta: </strong><br />
                    Para acceder a ciertas funciones,
                    puede ser necesario crear una cuenta. - Usted es responsable
                    de mantener la confidencialidad de sus credenciales de
                    acceso. - Xtream se reserva el derecho de suspender o
                    eliminar cuentas que violen estos términos.
                  </li>
                  <li className="my-1">
                    <strong>📶 Disponibilidad del Servicio: </strong><br /> 
                    Xtream no garantiza que el
                    servicio esté disponible de forma ininterrumpida o libre de
                    errores. - Nos reservamos el derecho de modificar, suspender
                    o discontinuar la aplicación en cualquier momento sin previo
                    aviso.
                  </li>
                  <li className="my-1">
                    <strong>📄 Contenido de Terceros: </strong><br />
                    Xtream puede incluir enlaces o
                    contenido de terceros. No nos responsabilizamos por la
                    exactitud o legalidad de dicho contenido. - El uso de
                    servicios de terceros está sujeto a sus propios términos y
                    condiciones.
                  </li>
                  <li className="my-1">
                    <strong>🔐 Privacidad: </strong><br />
                    El uso de Xtream implica la recopilación y
                    tratamiento de ciertos datos personales. Para más
                    información, consulte nuestra <NavLink to={"/*"} onClick={handleClose}>Politica de Privacidad</NavLink>.
                  </li>
                  <li className="my-1">
                    <strong>⚖️ Limitación de Responsabilidad: </strong><br />
                    Xtream no será
                    responsable por daños directos, indirectos, incidentales o
                    consecuentes derivados del uso o imposibilidad de uso de la
                    aplicación.
                  </li>
                  <li className="my-1">
                    <strong>📍 Legislación Aplicable: </strong><br />
                    Estos términos se rigen por las
                    leyes de Argentina. - Cualquier disputa será
                    resuelta ante los tribunales competentes de dicha
                    jurisdicción.
                  </li>
                  <li className="my-1">
                    <strong>✉️ Contacto: </strong><br />
                    cualquier consulta relacionada con estos
                    Términos y Condiciones, puede contactarnos a través de:
                    <Link to={"/contacto"} onClick={handleClose}> Contacto</Link>.
                  </li>
                </ol>
              </div>

              <Form.Check
                type="checkbox"
                label="He leído y acepto los Términos y Condiciones"
                checked={aceptarTerminos}
                onChange={handleCheckboxChange}
              />
            </FormGroup>
            <FormGroup className="d-flex justify-content-end">
              <Button
                className="tinos"
                variant="success"
                onClick={handleShow}
                type="submit"
                disabled={!aceptarTerminos}
              >
                Crea tu cuenta
              </Button>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Menu;
