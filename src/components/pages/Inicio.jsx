import { Button } from 'react-bootstrap';
import CaruselInicio from './componentesInicio/CaruselInicio';
import CardInicio from './componentesInicio/CardInicio';


const Inicio = () => {
    return (
        <>
            {/* carusel y card */}
            <CaruselInicio />
            <CardInicio />
            {/* titulo principal */}
            <h1 className='text-center'> Bienvenidos a Xtream </h1>
            {/* definir botones o buscador */}
            <div style={{ position: 'relative', height: '100px' }}>
                <Button
                    variant="success"
                    className="position-absolute start-0 bottom-0 m-3"
                >
                    Buscar
                </Button>
                <Button
                    variant="success"
                    className="position-absolute end-0 bottom-0 m-3"
                >
                    Selecc
                </Button>
            </div>
        </>
    );
};

export default Inicio;