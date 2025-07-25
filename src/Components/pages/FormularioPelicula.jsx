import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const FormularioPelicula = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <section className="container my-5">
      <h1 className="my-3">{titulo}</h1>
      <Form onSubmit={handleSubmit((e) => e.preventDefault)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Matrix"
            {...register("titulo", {
              required: "El título es un dato obligatorio",
              minLength: {
                value: 1,
                message: "El título debe tener al menos 1 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El título debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.titulo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Director*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lana y Lilly Wachowski"
            {...register("director", {
              required: "El director es un dato obligatorio",
              minLength: {
                value: 1,
                message: "El director debe tener al menos 1 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El director debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.director?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Año de estreno*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 1999"
            {...register("anioEstreno", {
              required: "El año de estreno es un dato obligatorio",
              min: {
                value: 1800,
                message: "El año de estreno debe estar entre 1800 y 2025",
              },
              max: {
                value: 2025,
                message: "El año de estreno debe estar entre 1800 y 2025",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.anioEstreno?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Poster*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_480x.jpg"
            {...register("imagen", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value: /^https?:\/\/.+\.(jpg|jpeg|png|gif)(\?.*)?$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo*</Form.Label>
          <Form.Select
            {...register("tipo", {
              required: "Es obligatorio indicar el tipo",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Pelicula">Pelicula</option>
            <option value="Serie">Serie</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.tipo?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Género*</Form.Label>
          <Form.Select
            {...register("genero", {
              required: "El género es un dato obligatorio",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Acción">Acción</option>
            <option value="Aventura">Aventura</option>
            <option value="Ciencia ficción">Ciencia Ficción</option>
            <option value="Crimen">Crimen</option>
            <option value="Drama">Drama</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Histórico">Histórico</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.genero?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Película de acción y fantasía sobre la realidad simulada."
            as="textarea"
            {...register("descripcionBreve", {
              required: "La descripcion breve es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "La descripcion breve debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "La descripcion breve debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Un hacker descubre que su realidad es una simulación creada por máquinas inteligentes y se une a la rebelión para liberar a la humanidad."
            as="textarea"
            {...register("descripcionAmplia", {
              required: "La descripcion amplia es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "La descripcion amplia debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 300,
                message:
                  "La descripcion amplia debe tener como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4 d-flex gap-3">
          <Button variant="success" type="submit">
            Guardar
          </Button>
          <Link className="btn btn-danger" to={'/administrador'}>Cancelar</Link>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioPelicula;
