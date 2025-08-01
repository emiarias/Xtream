import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ItemPelicula = ({ pelicula, fila, borrarPelicula, destacarPelicula}) => {

  const eliminarPelicula = () =>{
    Swal.fire({
  title: "Eliminar pelicula/serie",
  text: "No puedes revertir este paso!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#277a35ff",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, quiero eliminar!",
  cancelButtonText: "Cancelar"
}).then((result) => {
  if (result.isConfirmed) {
    if(borrarPelicula(pelicula.id)){
      Swal.fire({
      title: "Película/serie eliminada!",
      text: `La película/serie ${pelicula.title} fue eliminada correctamente`,
      icon: "success"
    });
    }
    else{
      Swal.fire({
      title: "Ocurrió un error!",
      text: `La película/serie ${pelicula.title} no pudo ser eliminada`,
      icon: "error"
    });
    }
  }
});
  }

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
        <Link to={`/administrador/editar/${pelicula.id}`} className="btn btn-warning me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarPelicula} className='me-lg-2'>
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="transparent" onClick={() => destacarPelicula(pelicula.id)}>
          {pelicula.destacada? <i className="bi bi-star-fill fs-4 text-success"></i> : <i className="bi bi-star text-success"></i>}
        </Button>
        </div>
      </td>
    </tr>
    );
};

export default ItemPelicula;