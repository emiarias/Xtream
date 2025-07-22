import Carousel from 'react-bootstrap/Carousel';
import '../../../Index.css'; // Ajusta la ruta según tu estructura

const CaruselInicio = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item>
  <img 
    className='w-100 img-fluid'
    style={{ maxHeight: '400px', objectFit: 'cover' }}
    src="" 
    alt="Familia viendo película en casa" 
  />
  <Carousel.Caption>
    <h3 className='text-white'>Disfruta en familia o solo</h3>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img 
    className='w-100 img-fluid'
    style={{ maxHeight: '400px', objectFit: 'cover' }}
    src="" 
    alt="Pantalla de cine con butacas vacías" 
  />
  <Carousel.Caption>
    <h3 className='text-white'>Estrenos exclusivos cada semana</h3>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img 
    className='w-100 img-fluid'
    style={{ maxHeight: '400px', objectFit: 'cover' }}
    src="" 
    alt="Control remoto y palomitas frente a TV" 
  />
  <Carousel.Caption>
    <h3 className='text-white'>Tu maratón perfecto comienza aquí</h3>
  </Carousel.Caption>
</Carousel.Item>
      </Carousel>

    </>
  );
};

export default CaruselInicio;