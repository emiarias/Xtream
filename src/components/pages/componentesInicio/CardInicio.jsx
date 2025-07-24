import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const CardInicio = () => {

    return (<>
        <Container className="my-5">
            <Row>
                <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2.4}
                    className="mb-4"   >
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596"
                            alt="Póster de Matrix"
                            className='img-fluid' />
                        <Card.Body>
                            <Card.Title>Matrix</Card.Title>
                            <Card.Text>Película de acción y fantasía sobre la realidad simulada.</Card.Text>
                            <Card.Text>"Un hacker descubre que su realidad es una simulación creada por máquinas inteligentes y se une a la rebelión para liberar a la humanidad.</Card.Text>
                            
                            {/* cambiar el boton por un link*/}
                            <Button variant="success">Ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default CardInicio;