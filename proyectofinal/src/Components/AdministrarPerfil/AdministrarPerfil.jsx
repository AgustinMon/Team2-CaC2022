import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LANGUAGES } from "../../Constants/languages";
import MainContext from "../../Context/MainContext";
import "./AdministrarPerfil.css";

export default function AdministrarPerfil(props) {

  const { language } = useContext(MainContext);
  const handleClose = () => {props.toggleShow(false)};

  function confirmarCambios() {
    const name = document.getElementById("name").value;
    const logo = document.querySelector('[name="logo"]:checked').value;

    const newProfile = {};
    newProfile.name = name;
    newProfile.logo = logo;

    props.update(newProfile);
    handleClose();
  }

  function borrarPerfil() {
    props.delete();
    handleClose();
  }

  return (
    <>
      <Modal
	  	size="lg"
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fade="false"
        centered
      >
        <Modal.Header style={{ backgroundColor: "black" }} closeButton>
          <Modal.Title>
            { props.edit ? LANGUAGES[language].PROFILES.MANAGE_NAME : LANGUAGES[language].PROFILES.ADD}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <div className="input_name_profile">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={LANGUAGES[language].OTHER.NAME}
              defaultValue={props.profile?.name}
              required
            />
          </div>
          <div className="select_logo_profile">
		  {
		  	[...Array(6)].map((x, i) =>
          <div key={i}>
            <input 
              type="radio" name="logo" value={i+1} required
              id={`logo${i+1}`} className="input-hidden" 
              defaultChecked={props.profile.logo === (i+1)}/>
            <label htmlFor={`logo${i+1}`}>
              <img src={require(`../../Assets/avatar${i+1}.png`)} 
                  alt={`logo${i+1}`} className="select_perfil_imagen"/>
            </label>
          </div>
				)
			}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="outline-secondary" onClick={handleClose}>{LANGUAGES[language].OTHER.CANCEL}</Button>
          <Button variant="outline-primary" onClick={confirmarCambios}>{LANGUAGES[language].OTHER.SAVE}</Button>
          { props.edit && <Button variant="outline-danger" onClick={borrarPerfil}>{LANGUAGES[language].PROFILES.DELETE}</Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}
