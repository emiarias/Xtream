import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorImage from "../assets/img-error-404.png";
import "../index.css"; 
import "./Error404.css";  // importamos el CSS específico

const Error404 = () => {
  return (
    <div className="page-wrapper bg-light text-dark d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Container className="text-center py-5">
          <Row>
            <Col>
              <img
                src={errorImage}
                alt="Página no encontrada"
                className="img-fluid error-image mb-4"
              />
              <h2>Oops! Página no encontrada</h2>
              <p>La URL a la que intentaste acceder no existe.</p>
              <Link to="/">
                <Button variant="primary">Volver al inicio</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      {/* El footer lo pone App.jsx, no acá para evitar doble footer */}
    </div>
  );
};

export default Error404;
