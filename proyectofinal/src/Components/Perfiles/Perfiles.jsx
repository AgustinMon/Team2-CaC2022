import React from 'react'
import { useState } from 'react';
import Perfil from '../Perfil/Perfil'
import './Perfiles.css';

export default function Perfiles() {

  const [edit, toggleEdit] = useState(false);

  // aca había pensado que en la parte de los perfiles hacer un map en los que tenga el usuario
  // y a cada Perfil se le envia la info de cada perfil (foto y nombre)
  return (
    <div className='pagina_perfiles'>
      <h1 className='perfiles_titulo'>¿Quién está viendo ahora?</h1>
      <div className='contenedor_perfiles'>
        <Perfil edit={edit}></Perfil>
        <Perfil edit={edit}></Perfil>
        <Perfil edit={edit}></Perfil>
        <Perfil edit={edit}></Perfil>
        <Perfil edit={edit}></Perfil>
      </div>
      <a href='#' onClick={() => toggleEdit(!edit)} className='boton_administrar_perfiles'>{edit ? "Listo" : "Administrar perfiles"}</a>
    </div>
  )
}
