import CaruselInicio from "./componentesInicio/CaruselInicio";
import CardInicio from "./componentesInicio/CardInicio";
import { Row } from "react-bootstrap";

const Inicio = ({ peliculas, terminoBusqueda }) => {
  const filtrarPeliculas = peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <>
      {/* carusel*/}
      <CaruselInicio className="container" />
      <article className="container">
        {/* titulo principal */}
        <h1 className="text-center mb-3 mt-3 tinos"> Bienvenidos a Xtream </h1>
        <p className="raleway text-center mb-5">
          ¡Comienza tu maratón de entretenimiento ahora!
        </p>

        {/* select */}
        <select className="form-select w-auto m-3">
          <option value="">Seleccione lo que deseas ver</option>
          <option value="opcion1">Drama </option>
          <option value="opcion2">Accion </option>
          <option value="opcion3">Terror </option>
          <option value="opcion4">Animacion </option>
          <option value="opcion5">Comedia</option>
          <option value="opcion6">Ver en familia</option>
        </select>
        {/* card */}
        <Row className="row-gap-3 justify-content-center my-3">
          {filtrarPeliculas.length > 0 ? (
            filtrarPeliculas.map((pelicula) => (
              <CardInicio key={pelicula.id} pelicula={pelicula} />
            ))
          ) : (
            <>
              <h3 className="text-center mb-0">
                No se encontraron peliculas para mostrar <i className="bi bi-emoji-frown-fill text-success fs-5"></i>
              </h3>
              <h5 className="text-center text-danger">Lo sentimos <i className="bi bi-heartbreak-fill"></i></h5>
            </>
          )}
        </Row>
      </article>
    </>
  );
};

export default Inicio;
