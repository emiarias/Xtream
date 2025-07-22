import CaruselInicio from './componentesInicio/CaruselInicio';
import CardInicio from './componentesInicio/CardInicio';


const Inicio = () => {
    return (
        <>
            {/* carusel y card */}
            <CaruselInicio />
            <CardInicio />
            {/* titulo principal */}
            <h1 className='text-center mb-3 mt-3'> Bienvenidos a Xtream </h1>
            {/* agregar un select */}
            <select className='form-select'>
                <option value=''>Seleccione una opción</option>
                <option value='opcion1'>Drama </option>
                <option value='opcion2'>Accion </option>
                <option value='opcion3'>Terror </option>
                <option value='opcion3'>Animacion </option>
                <option value='opcion3'>Comedia</option>
                <option value='opcion3'>Ver en familia</option>
            </select>    
        </>
    );
};

export default Inicio;