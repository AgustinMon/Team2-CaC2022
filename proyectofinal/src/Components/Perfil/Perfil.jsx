import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import './Perfil.css';

export default function Perfil(props) {

	const [hover, toggleHover] = useState(false);

	function changeHover() {
		toggleHover(!hover);
	}
  
  return (
    <div className='perfil_tarjeta' onMouseEnter={changeHover} onMouseLeave={changeHover}>
		<div>
			{props.edit && <FontAwesomeIcon icon={faPencil} className="edit_pencil" size="3x"/>}
			<img src={require('../../Assets/avatar6.png')} alt="avatar Juan Perez" className={ hover ? 'perfil_imagen_hover' : 'perfil_imagen' }/>
		</div>
		<p className={ hover ? 'nombre_perfil_hover' : 'nombre_perfil' }>Juan Perez</p>
	</div>
  )
}
