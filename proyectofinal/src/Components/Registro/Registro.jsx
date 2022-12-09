import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Services/Firebase";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { LANGUAGES } from "../../Constants/languages";
import MainContext from "../../Context/MainContext";
import "./Registro.css";
import { UserProfileModel } from "../../Models/UserProfileModel";
import { addElement } from "../../Services/Firestore";

export default function Registro(props) {
  const handleClose = () => props.toggleShow(false);
  const navigate = useNavigate();
  const { language, changeUser,toggleDarkMode } = useContext(MainContext);

  const Register = (ev) => {
    document.getElementById("error-register-password").style.visibility =
      "hidden";
    document.getElementById("error-register-email-existente").style.visibility =
      "hidden";
    document.getElementById("error-register-email-invalido").style.visibility =
      "hidden";
    ev.preventDefault();
    // new user toma la estructura del modelo
    console.log("event", ev);
    const newUser = {
      email: ev.target[0].value,
      password: ev.target[1].value,
      // nombre: ev.target[2].value,
      // lang: ev.target[3].value,
      // edad: ev.target[4].value,
      // logo: ev.target[5].value,
    };
    ConnectAndRegister(newUser);
    
  };

  const ConnectAndRegister = (newUser) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // una vez creado el user en Auth, agregamos el perfil en Firestore
        // new user toma la estructura del modelo
        const newUserProfile = new UserProfileModel();
        newUserProfile.userId = userCredential.user.uid;
        newUserProfile.profiles = [];
        // newUserProfile.language = newUser.lang;
        // newUserProfile.profiles[0].name = newUser.nombre
        // newUserProfile.profiles[0].age = newUser.edad
        // newUserProfile.profiles[0].logo = newUser.logo
        addElement(newUserProfile)
        .then(
          // crear context y salir de login
          () => {
            changeUser(null, newUserProfile.userId);
            // changeLanguage(null, newUserProfile.language);
            toggleDarkMode(true);
            handleClose();
            navigate(`/Perfiles`);
          }
        );
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/weak-password") {
          document.getElementById("error-register-password").style.visibility =
            "visible";
        } else if (error.code === "auth/email-already-in-use") {
          document.getElementById(
            "error-register-email-existente"
          ).style.visibility = "visible";
        } else {
          document.getElementById(
            "error-register-email-invalido"
          ).style.visibility = "visible";
        }
      });
  };

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
            <h2>{LANGUAGES[language].REGISTER.HEADING_REGISTER}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <form className="formulario" onSubmit={Register}>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_USERNAME} (email):</label>
              <input type="email" className="input-email form-control-lg" required
              placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_EMAIL}
              />
            </legend>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_PASS}:</label>
              <input
                type="password"
                className="input-email mt-2  form-control-lg"
                placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_PASS}
                required
              />
              <p><small>{LANGUAGES[language].REGISTER.PASS_REQUIREMENTS}.</small></p>
            </legend>
            <span
              className="error password-invalido"
              id="error-register-password"
            >
              Hay un error, la contraseña debe tener minimo 6 caracteres.
            </span>
            <span
              className="error email-existente"
              id="error-register-email-existente"
            >
              Hay un error, este email ya existe.
            </span>
            <span
              className="error email-invalido"
              id="error-register-email-invalido"
            >
              Hay un error en este email.
            </span>
            <input
              type="submit"
              className="btn btn-danger btn-lg mb-4"
              value={LANGUAGES[language].REGISTER.HEADING_REGISTER}/>
            <button type="button" className="btn btn-outline-secondary btn-lg mb-4" onClick={handleClose}>
              Cancelar
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="outline-primary" onClick={confirmarCambios}>
            Registrarme
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
