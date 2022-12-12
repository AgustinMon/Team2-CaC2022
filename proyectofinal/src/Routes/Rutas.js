import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Principal from '../Components/Principal/Principal';
import { Categoria } from '../Components/Categoria/Categoria';
import {NotFound} from '../Components/NotFound/NotFound';
import {Login} from '../Components/LogIn/Login';
import {Busqueda} from '../Components/Busqueda/Busqueda';
import {Film} from '../Components/Film/Film';
import Perfiles from '../Components/Perfiles/Perfiles';

const Rutas = (props) => {

  const children = props.children;

  return (
    <BrowserRouter>
          {children}
        <Routes>
          {/* cargar enlaces solo si el usuario esta registrado */}
          {/* <Route exact path="/" element={<Login/>}/> */}
          <Route path="/Team2-CaC2022/" element={<Login/>}/>
          <Route exact path="/Home" element={<Principal/>}/>          
          <Route path="/Login" element={<Login/>}/>         
          <Route path="/buscar/:palabra" element={<Busqueda/>}/>
          <Route path="/Category/:Catid" element={<Categoria/>}/>
          <Route path="/View/:movie_id" element={<Film/>}/>
          <Route path="/Perfiles" element={<Perfiles/>}/>
          <Route path="/Error" element={<NotFound/>}/>
          <Route path="*" element={ <Navigate to="/Error" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rutas;