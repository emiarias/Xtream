import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ItemPelicula = ({ pelicula, fila, borrarPelicula }) => {

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
      title: "Producto eliminado!",
      text: `El producto ${pelicula.title} fue eliminado correctamente`,
      icon: "success"
    });
    }
    else{
      Swal.fire({
      title: "Producto eliminado!",
      text: `El producto ${pelicula.title} no pudo ser eliminado`,
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
        <Button variant="danger" onClick={eliminarPelicula}>
          <i className="bi bi-trash"></i>
        </Button>
        </div>
      </td>
    </tr>
    );
};

export default ItemPelicula;