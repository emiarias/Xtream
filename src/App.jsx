import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './components/shared/Menu'
import Footer from "./components/shared/Footer";
import Inicio from './components/pages/Inicio';
import Contacto from './components/pages/Contacto';
import Login from './components/pages/Login';
import DetallePelicula from './components/pages/DetallePelicula';
import Error404 from "./components/pages/Error404";
import Administrador from './components/pages/Administrador';
import { BrowserRouter, Route, Routes } from 'react-router';
import { useState } from 'react';
import AcercaDeNosotros from './Components/pages/AcercaDeNosotros';

function App() {

const userLogueado = sessionStorage.getItem("userKey") || false
const [adminUser, setAdminUser] = useState(userLogueado)

  return (
    <>
      <BrowserRouter>
      <Menu adminUser={adminUser} setAdminUser={setAdminUser}></Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/login" element={<Login setAdminUser={setAdminUser}></Login>}></Route>
          <Route path="/detalle" element={<DetallePelicula></DetallePelicula>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/acercadenosotros" element={<AcercaDeNosotros></AcercaDeNosotros>}></Route>
          <Route path="/administrador" element={<Administrador></Administrador>}></Route>
          <Route path="/*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
