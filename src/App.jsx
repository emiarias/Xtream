import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer"; // corregí mayúscula

import Error404 from "./Components/Error404";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Suscripciones from "./Components/pages/Suscripciones";
import ContenidoPremium from "./Components/pages/ContenidoPremium";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <h1>Hola mundo!</h1>

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<h2>Bienvenido a Xtream!</h2>} />
            <Route path="/suscripciones" element={<Suscripciones />} />
            <Route path="/premium-exclusivo" element={<ContenidoPremium />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
