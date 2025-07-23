import { Button } from 'react-bootstrap';

const ItemPelicula = () => {
    return (
        <tr>
      <td className="text-center">1</td>
      <td>Matrix</td>
      <td className="text-end">Película</td>
      <td className="text-center">
        <img
          src="https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.progressive.jpg?v=1573587596"
          className="w-25 overflow-hidden"
          alt="Matrix"
        ></img>
      </td>
      <td>Ciencia ficción</td>
      <td className="text-center">
        <div className="d-flex gap-1">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
        </div>
      </td>
    </tr>
    );
};

export default ItemPelicula;