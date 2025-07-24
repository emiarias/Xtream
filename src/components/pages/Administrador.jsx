import { Button, Table } from 'react-bootstrap';
import ItemPelicula from './componentesAdministrador/ItemPelicula';

const Administrador = () => {
    return (
        <section className='container'>
           <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 tinos">Catálogo de películas/series</h1>
        <div>
          <Button className="btn btn-success">
            Agregar película/serie
            <i className="bi bi-file-earmark-plus ms-2"></i>
          </Button>
          <Button className="btn btn-info ms-2">
            <i
              className="bi bi-database-fill-add"
            ></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover className="raleway">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Año de estreno</th>
            <th>Género</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
            <ItemPelicula></ItemPelicula>
        </tbody>
      </Table>
        </section>
    );
};

export default Administrador;