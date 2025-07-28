import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const ItemPelicula = ({ pelicula, fila }) => {
    return (
        <tr>
      <td className="text-center">{fila}</td>
      <td>{pelicula.titulo}</td>
      <td className="text-center">{pelicula.tipo}</td>
      <td className="text-center">
        {pelicula.anioEstreno}
      </td>
      <td>{pelicula.genero}</td>
      <td className="text-center">
        <div className="d-flex gap-1 justify-content-center">
        <Link to={"/administrador/editar"} className="btn btn-warning me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
        </div>
      </td>
    </tr>
    );
};

export default ItemPelicula;