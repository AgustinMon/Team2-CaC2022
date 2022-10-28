import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Rutas = (props) => {

  const children = props.children;

  // reemplazar con un componente
  const Login = "Bienvenido al login";
  const Home = "Esta es la home";
  const NotFound = '<h2>404 - Página no encontrada</h2>';

  return (
    <BrowserRouter>
          {children}
        <Routes>
          <Route path="*" element={NotFound}/>
          <Route exact path="/" element={Home}/>
          <Route path="/Login" element={Login}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rutas;