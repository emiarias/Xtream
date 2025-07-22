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
            <p>¡Comienza tu maratón de entretenimiento ahora!
                Descubre miles de películas y series exclusivas.
                ¡Únete y vive la mejor experiencia!
                Explora, disfruta y comparte tus historias favoritas.
                Regístrate y accede a estrenos cada semana.
                ¡No te pierdas lo mejor del cine y la TV, solo en Xtream!
                Tu próxima aventura comienza aquí.</p>
            {/* select */}
            <select className='form-select w-auto'>
                <option value=''>Seleccione lo que deseas ver</option>
                <option value='opcion1'>Drama </option>
                <option value='opcion2'>Accion </option>
                <option value='opcion3'>Terror </option>
                <option value='opcion4'>Animacion </option>
                <option value='opcion5'>Comedia</option>
                <option value='opcion6'>Ver en familia</option>
            </select>
        </>
    );
};

export default Inicio;