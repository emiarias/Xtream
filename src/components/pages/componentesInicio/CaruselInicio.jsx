import Carousel from 'react-bootstrap/Carousel';


const CaruselInicio = () => {
    
    return (
       <>
       <Carousel>
      <Carousel.Item>
        <img className='w-100 img-fluid'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        src="https://www.clarin.com/2023/06/27/eT3pjCwzO_2000x1500__1.jpg"
         alt="Pantalla de TV con apps de peliculas y series"
          />
        <Carousel.Caption>
            <h3 className='text-white'>Puedes encontrar las mejores peliculas y series</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 img-fluid'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        src="https://media.istockphoto.com/id/1412871535/es/foto/amigos-viendo-pel%C3%ADculas-juntos-en-casa.jpg?s=612x612&w=0&k=20&c=Pdpq6zugaWGNnY6IIQb-fuAAHViOsV9pxiYa4YWZ37E="
      alt="amigos disfrutando de tv en casa"
          />
        <Carousel.Caption>
          <h3 className='text-white'>Disfruta de la mejor experiencia en Xtream </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 img-fluid'
        style={{ maxHeight: '400px', objectFit: 'cover' }}
        src="https://media.istockphoto.com/id/2137164490/photo/tv-online-television-streaming-video-male-hand-holding-tv-remote-control-multimedia-streaming.jpg?s=1024x1024&w=is&k=20&c=4oV3Kz1LJiaq8KRy35i43DhRecRuFGR7OFBMYBwaJJI="
         alt="control remoto de tv y un fondo con peliculas"
          />
      </Carousel.Item>
    </Carousel>
    
       </>
    );
};

export default CaruselInicio;