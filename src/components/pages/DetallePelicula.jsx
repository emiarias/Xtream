import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";

const DetallePelicula = ({ buscarPelicula }) => {

  const { id } = useParams();
  const [pelicula, setPelicula] = useState({});

   useEffect(() => {
    const peliculaEncontrada = buscarPelicula(id) 
    setPelicula(peliculaEncontrada);
  }, []);

  return (
    
    <Container className="my-3">
      <Link className="text-decoration-none text-success-emphasis" to={"/"}>
        <i className="bi bi-arrow-left mx-2"></i>Volver
      </Link>
      <Card className="my-3" border="success">
        <Row>
          <Col md={12}>
            <Card.Img
              variant="top"
              src={pelicula.image}
              className="imagen-detalle-pelicula"
              alt={pelicula.alt}
            />
          </Col>
          <Col md={12}>
            <Card.Body>
              <div className="d-flex justify-content-evenly align-items-center">
                <Card.Title className="text-start Raleway display-5">
                  {pelicula.title}
                </Card.Title>
                <Link
                  className="btn btn-success"
                  to={pelicula.trailer}
                >
                  Ver Pelicula
                </Link>
              </div>
              <hr />
              <div className="d-flex justify-content-evenly border border-warning align-items-center my-3 py-2">
                <Card.Text className="text-center mb-0">{pelicula.genre}</Card.Text>
                <Card.Text className="text-center mb-0">
                  {pelicula.director}
                </Card.Text>
                <Card.Text className="text-center">{pelicula.year}</Card.Text>
              </div>
              <Card.Text className="tinos">
                {pelicula.description_amplia}
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
