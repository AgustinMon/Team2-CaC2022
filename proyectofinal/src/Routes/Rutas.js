import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Principal from '../Components/Principal/Principal';
import { Categoria } from '../Components/Categoria/Categoria';
import {NotFound} from '../Components/NotFound/NotFound';
import {Login} from '../Components/LogIn/Login';
import {Busqueda} from '../Components/Busqueda/Busqueda';
import {Film} from '../Components/Film/Film';

const Rutas = (props) => {

  const children = props.children;

  return (
    <BrowserRouter>
          {children}
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/Team2-CaC2022" element={<Principal/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/buscar/:palabra" element={<Busqueda/>}/>
          <Route path="/Category/:Catid" element={<Categoria/>}/>
          <Route path="/View/:movie_id" element={<Film/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Rutas;