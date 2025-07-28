import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Col } from 'react-bootstrap';


const CardInicio = () => {

    return (<>
         <Col xs={12} sm={12} md={6} lg={3} className="mb-4">
                    <Card className='h-100'>
                        <Card.Img
                            variant="top"
                            src="https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596"
                            alt="Póster de Matrix"
                            className='img-fluid' />
                        <Card.Body >
                            <Card.Title>Matrix</Card.Title>
                            <Card.Text>Película de acción y fantasía sobre la realidad simulada.</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            <Button variant="success" className='text-center'>Ver más</Button>
                        </Card.Footer>
                    </Card>
                </Col>

    </>
    );
};

export default CardInicio;