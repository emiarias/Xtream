import { Container, Row, Col, Card } from "react-bootstrap";
import juanImg from '../../assets/imagen_equipo/juan-blanco.jpeg';
import miltonImg from '../../assets/imagen_equipo/Milton-Mamani.jpeg';
import lucasImg from '../../assets/imagen_equipo/Lucas-figueroa.jpeg';
import alejandroImg from '../../assets/imagen_equipo/alejandro-insinga.jpeg';

const miembros = [
  {
    nombre: "Juan Manuel Blanco",
    rol: "CEO & Fundador",
    imagen: juanImg,
  },
  {
    nombre: "Alejandro Insinga",
    rol: "Diseñador UX/UI",
    imagen: alejandroImg,
  },
  {
    nombre: "Milton Ramon Mamani",
    rol: "Desarrollador Full Stack",
    imagen: miltonImg,
  },
  {
    nombre: "Lucas Ivan Figueroa Alcorta",
    rol: "Especialista en Marketing",
    imagen: lucasImg,
  },
];

function AcercaDeNosotros() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 titulo-gradiente">Acerca de Nosotros</h1>

      <section className="mb-5 bg-vision">
        <h3 className="text-center">Nuestra Visión</h3>
        <strong>
        <p>
          En Xtream, creemos en una experiencia de entretenimiento sin límites.
          Nuestra visión es revolucionar la forma en que las personas disfrutan
          del contenido audiovisual, brindando acceso a lo mejor del cine y las
          series desde cualquier lugar.
        </p></strong>
      </section>

      <section className="mb-5 bg-objetivo">
        <h3 className="text-center">Nuestro Objetivo</h3>
        
        <strong><p>
          Nuestro objetivo es ofrecer una plataforma intuitiva, moderna y
          accesible para que nuestros usuarios encuentren sus películas y series
          favoritas con facilidad, además de descubrir nuevos títulos cada
          semana.
        </p></strong>
      </section>
      <hr/>
      <section>
        <h2 className="mb-4 text-center fuenteEquipo">Nuestro Equipo</h2>
        <Row xs={1} sm={2} md={4} className="g-4">
          {miembros.map((miembro, idx) => (
            <Col key={idx}>
              <Card className="h-100 text-center shadow team-card border-0">
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
