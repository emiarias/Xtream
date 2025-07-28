import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';


const CardInicio = ({ pelicula }) => {

    return (<>
               <Col
                        xs={12}       
                        sm={6}        
                        md={4}        
                        lg={3}        
                        xl={2.4}      
                        className="mb-4"
                    >
                        <Card>
                            <Card.Img
                                variant="top"
                                src={pelicula.imagen}
                                alt="Póster de Matrix"
                                className='img-fluid'
                            />
                            <Card.Body>
                                <Card.Title>{pelicula.titulo}</Card.Title>
                                <Card.Text>{pelicula.descripcionBreve}</Card.Text>
                                <Button variant="primary">Ver más</Button>
                            </Card.Body>
                        </Card>
                    </Col>
    </>
    );
};


export default CardInicio;