import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const miembros = [
  {
    nombre: "Juan Manuel Blanco",
    rol: "CEO & Fundador",
    imagen: "/images/julian.jpg",
  },
  {
    nombre: "Alejandro Insinga",
    rol: "Diseñador UX/UI",
    imagen: "/images/camila.jpg",
  },
  {
    nombre: "Milton Ramon Mamani",
    rol: "Desarrollador Full Stack",
    imagen: "/images/tomas.jpg",
  },
  {
    nombre: "Lucas Ivan Figueroa Alcorta",
    rol: "Especialista en Marketing",
    imagen: "/images/valentina.jpg",
  },
];

function AcercaDeNosotros() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Acerca de Nosotros</h1>

      <section className="mb-5">
        <h3>Nuestra Visión</h3>
        <p>
          En Xtream, creemos en una experiencia de entretenimiento sin límites.
          Nuestra visión es revolucionar la forma en que las personas disfrutan
          del contenido audiovisual, brindando acceso a lo mejor del cine y las
          series desde cualquier lugar.
        </p>
      </section>

      <section className="mb-5">
        <h3>Nuestro Objetivo</h3>
        <p>
          Nuestro objetivo es ofrecer una plataforma intuitiva, moderna y
          accesible para que nuestros usuarios encuentren sus películas y series
          favoritas con facilidad, además de descubrir nuevos títulos cada
          semana.
        </p>
      </section>

      <section>
        <h3 className="mb-4">Nuestro Equipo</h3>
        <Row xs={1} sm={2} md={4} className="g-4">
          {miembros.map((miembro, idx) => (
            <Col key={idx}>
              <Card className="h-100 text-center shadow team-card">
                <Card.Img
                  variant="top"
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  className="team-img"
                />
                <Card.Body>
                  <Card.Title>{miembro.nombre}</Card.Title>
                  <Card.Text>{miembro.rol}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default AcercaDeNosotros;
