import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const ItemPelicula = ({ pelicula, fila }) => {
    return (
        <tr>
      <td className="text-center">{fila}</td>
      <td>{pelicula.title}</td>
      <td className="text-center">{pelicula.type}</td>
      <td className="text-center">
        {pelicula.year}
      </td>
      <td>{pelicula.genre}</td>
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