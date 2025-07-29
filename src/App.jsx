import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Contacto from "./components/pages/Contacto";
import Login from "./components/pages/Login";
import DetallePelicula from "./components/pages/DetallePelicula";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import AcercaDeNosotros from "./components/pages/AcercaDeNosotros";
import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/ProtectorAdmin";
import FormularioPelicula from "./components/pages/FormularioPelicula";
import { v4 as uuidv4 } from "uuid";

function App() {
  const userLogueado = sessionStorage.getItem("userKey") || false;
  const [adminUser, setAdminUser] = useState(userLogueado);
  const peliculasLocalstorage = JSON.parse(localStorage.getItem('carteleraPeliculas')) || []
  const [peliculas, setPeliculas] = useState(peliculasLocalstorage)
  
    useEffect(()=>{
    localStorage.setItem('carteleraPeliculas', JSON.stringify(peliculas))
  }, [peliculas])

  const crearPeliculas = (peliculaNueva) => {
    peliculaNueva.id = uuidv4()

    setPeliculas([...peliculas,peliculaNueva])
    return true
  }

  const buscarPelicula = (idPelicula) => {
    const peliculaBuscada = peliculas.find((itemPelicula)=> itemPelicula.id==idPelicula)
    return peliculaBuscada
  }

  return (
    <>
      <BrowserRouter>
        <Menu adminUser={adminUser} setAdminUser={setAdminUser}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio peliculas={peliculas}></Inicio>}></Route>
            <Route
              path="/login"
              element={<Login setAdminUser={setAdminUser}></Login>}
            ></Route>
            <Route
              path="/detalle/:id"
              element={<DetallePelicula buscarPelicula={buscarPelicula}></DetallePelicula>}
            ></Route>
            <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            <Route
              path="/acercadenosotros"
              element={<AcercaDeNosotros></AcercaDeNosotros>}
            ></Route>
            <Route
              path="/administrador"
              element={<ProtectorAdmin adminUser={adminUser}></ProtectorAdmin>}
            >
              <Route index element={<Administrador peliculas={peliculas} setPeliculas={setPeliculas}></Administrador>}></Route>

              <Route
                path="crear"
                element={<FormularioPelicula titulo={'Añadir película/serie'} crearPeliculas={crearPeliculas}></FormularioPelicula>}
              ></Route>
              <Route
                path="editar"
                element={<FormularioPelicula titulo={'Editar película/serie'}></FormularioPelicula>}
              ></Route>
            </Route>
            <Route path="/*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
