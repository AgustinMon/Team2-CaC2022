import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import './Perfil.css';

export default function Perfil(props) {

	const [hover, toggleHover] = useState(false);
	const profile = setProfile();

	function setProfile() {
		let profile = props.profile? props.profile : {};

		if(props.addProfile) {
			profile.name = "Agregar perfil";
			profile.logo = "0";
		}

		return profile;
	}

	function changeHover() {
		toggleHover(!hover);
	}
  
  return (
    <div className='perfil_tarjeta' onMouseEnter={changeHover} onMouseLeave={changeHover}>
		<div className='base_tarjeta' onClick={(e) => props.show(e, props.profile, props.edit, props.addProfile)}>
			{props.edit && !props.addProfile && <FontAwesomeIcon icon={faPencil} className="edit_pencil" size="3x"/>}
			<img src={require(`../../Assets/avatar${profile.logo}.png`)} 
				alt={'avatar ' + profile.name} className={ hover ? 'perfil_imagen_hover' : 'perfil_imagen' }/>
		</div>
		
		<p className={ hover ? 'nombre_perfil_hover' : 'nombre_perfil' }>{profile.name}</p>
	</div>
  )
}
