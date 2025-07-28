import CaruselInicio from './componentesInicio/CaruselInicio';
import CardInicio from './componentesInicio/CardInicio';
import { Container, Row } from 'react-bootstrap';


const Inicio = ({ }) => {
    return (
        <>
            {/* carusel*/}
            <CaruselInicio className='container' />
        <article className='container'>
            {/* titulo principal */}
            <h1 className='text-center mb-3 mt-3 tinos' > Bienvenidos a Xtream </h1>
            <p className='raleway text-center mb-5'>¡Comienza tu maratón de entretenimiento ahora!</p>
            
            {/* select */}
            <select className='form-select w-auto m-3'>
                <option value=''>Seleccione lo que deseas ver</option>
                <option value='opcion1'>Drama </option>
                <option value='opcion2'>Accion </option>
                <option value='opcion3'>Terror </option>
                <option value='opcion4'>Animacion </option>
                <option value='opcion5'>Comedia</option>
                <option value='opcion6'>Ver en familia</option>
            </select>
            {/* card */}
            <Container className="my-5">
                <Row>
                    <CardInicio />
                    <CardInicio />
                    <CardInicio />
                    <CardInicio />
                    <CardInicio />
                    <CardInicio />
                </Row>
            </Container>
            </article>
        </>
    );
};

export default Inicio;