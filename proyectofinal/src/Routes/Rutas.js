import React from 'react'
import App from '../App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Rutas = () => {

  const Login = "Bienvenido al login";

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route path="/Login" element={Login}/>
        </Routes>
    </Router>
  );
}

export default Rutas;