import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const DetallePelicula = () => {
  return (
    <Container className="my-3">
      <Link className="text-decoration-none text-success-emphasis" to={"/"}>
        <i className="bi bi-arrow-left mx-2"></i>Volver
      </Link>
      <Card className="my-3" border="success">
        <Row >
          <Col md={12}>
            <Card.Img
              variant="top"
              src="https://www.ole.com.ar/2025/02/10/YcGosYHpW_1290x760__1.jpg"
              className="imagen-detalle-pelicula"
            />
          </Col>
          <Col md={12}>
            <Card.Body>
              <div className="d-flex justify-content-evenly align-items-center">
                <Card.Title className="text-start Raleway display-5">Formula 1</Card.Title>
              <Link
                className="btn btn-success"
                to={"https://youtu.be/SaxjZrRONog"}
              >
                Ver Pelicula
              </Link>
              </div>
              <hr />
              <div className="d-flex justify-content-evenly border border-warning align-items-center my-3 py-2">
                <Card.Text className="text-center mb-0">
                ciencia
                </Card.Text>
                <Card.Text className="text-center mb-0">
                "Lana y Lilly Wachowski"
                </Card.Text>
                <Card.Text className="text-center">
                1972
                </Card.Text>
              </div>
              <Card.Text className="tinos">
                Fórmula 1 lanzó un nuevo avance de la próxima película de la
                Máxima. Y se aprovechó un momento especial para hacerlo, ya que
                el clip fue emitido durante el programa previo al Super Bowl,
                con millones de espectadores pendientes incluso a publicidades
                que se cobraron 267.000 dólares el segundo. La película,
                dirigida por Joseph Kosinski y producida por Jerry Bruckheimer,
                Pitt y Lewis Hamilton, está protagonizada por Pitt como el ex
                piloto de Fórmula 1 Sonny Hayes, quien regresa al deporte para
                asociarse con su compañero de equipo novato Joshua Pearce,
                interpretado por Damson Idris, en la escudería ficticia APXGP.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted">
                &copy;Todos los derechos reservados 2025
              </small>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetallePelicula;