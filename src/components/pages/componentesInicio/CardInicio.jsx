import Card from 'react-bootstrap/Card';
import {  Col , } from 'react-bootstrap';
import { Link } from 'react-router';


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
                        <Card className='h-100'>
                            <Card.Img
                                variant="top"
                                src={pelicula.imagen}
                                alt="Póster de Matrix"
                                className='img-fluid'
                            />
                            <Card.Body>
                                <Card.Title>{pelicula.titulo}</Card.Title>
                                <Card.Text>{pelicula.descripcionBreve}</Card.Text>
                                <Link className='btn btn-success' to={"/detalle"}>Ver más</Link>
                            </Card.Body>
                        </Card>
                    </Col>
    </>
    );
};

export default CardInicio;