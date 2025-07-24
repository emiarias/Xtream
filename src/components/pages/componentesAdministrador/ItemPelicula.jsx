import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

const ItemPelicula = () => {
    return (
        <tr>
      <td className="text-center">1</td>
      <td>Matrix</td>
      <td className="text-center">Película</td>
      <td className="text-center">
        1999
      </td>
      <td>Ciencia ficción</td>
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