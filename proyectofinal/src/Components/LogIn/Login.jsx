import app from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";
import { UserProfileModel } from "../../Models/UserProfileModel";
import { addElement } from "../../Services/Firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import "./login.css";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";
import { useState } from "react";
import Registro from "../Registro/Registro";
import { Button } from "react-bootstrap";

export const Login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { language, changeLanguage, changeUser,toggleDarkMode } = useContext(MainContext);

  const SignIn = (ev) => {
    ev.preventDefault();
    let email = ev.target[0].value;
    let password = ev.target[1].value;
    ConnectWithEmail(email, password);
  };

  const ConnectWithEmail = (email, password) => {
    const auth = getAuth(app);
    const user = signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log("credentials OK", credentials);
        const firebase_user = credentials.user.uid;
        // cargar user en contexto
        changeUser(null, firebase_user);
      })
      .then(() => navigate(`/Perfiles`))
      .catch((error) => {
        document.getElementById("error-signin").style.visibility = "visible";
        console.log(error.code);
        console.log(error.message);
      });
  };

  const ConnectWithPopUp = (provider) => {
    const auth = getAuth(app);
    const popUp = signInWithPopup(auth, provider)
      .then((credentials) => {
        console.log("credentials ok", credentials);
        changeUser(null, "usuario");
      })
      .then(() => navigate(`/Home`))
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const ResetPassword = () => {
    const btnError = document.getElementById("error-reset-password");
    const btnSent = document.getElementById("error-reset-sent");
    btnError.style.visibility = "hidden";
    btnSent.style.visibility = "hidden";

    const email = document.getElementById("input-email").value;
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        btnSent.style.visibility = "visible";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        btnError.style.visibility = "visible";
      });
  };

  return (
    <>
      <div className="fondo">
        <div className="degrade">
          <div className="contenedor">
            <div style={{margin: '125px 0'}}>
              <h1>{LANGUAGES[language].LOGIN.TITLE}</h1>
              <h2>{LANGUAGES[language].LOGIN.SUBTITLE}</h2>
              <p>{LANGUAGES[language].LOGIN.DESCRIPTION}</p>
            </div>
            <form className="formulario" id="signin" onSubmit={SignIn}>
              <legend>
                <label>{LANGUAGES[language].REGISTER.INPUT_USERNAME}:</label>{" "}
                <input
                  type="email"
                  className="input-email mt-2"
                  id="input-email"
                  placeholder={
                    LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_EMAIL
                  }
                />
              </legend>
              <legend>
                <label>{LANGUAGES[language].REGISTER.INPUT_PASS}:</label>{" "}
                <input
                  type="password"
                  className="input-email mt-2"
                  placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_PASS}
                />
              </legend>
              <input
                type="submit"
                className="btn btn-danger btn-lg"
                value="Sign In"
              />
              <span className="error signin" id="error-signin">
                {LANGUAGES[language].LOGIN.INPUT_ERROR}
              </span>
            </form>

            <p>
              <button
                className="boton_login"
                onClick={() => ConnectWithPopUp(googleAuthProvider)}
              >
                {LANGUAGES[language].LOGIN.GOOGLE}
              </button>
              <button
                className="boton_login"
                onClick={ResetPassword}
                href="#"
              >
                {LANGUAGES[language].LOGIN.RESTORE_PASS}
              </button>
            </p>
            <p style={{ backgroundColor: "#005500" }}>
              {LANGUAGES[language].LOGIN.INPUT_EXAMPLE}
            </p>
            <span className="error reset-password" id="error-reset-password">
              {LANGUAGES[language].LOGIN.MAIL_ERROR}
            </span>
            <span className="error email-sent" id="error-reset-sent">
              {LANGUAGES[language].LOGIN.MAIL_SUCCESS}
            </span>
            <br />
            <hr />
            <h3 className="mt-4 registrarse">
              {LANGUAGES[language].REGISTER.HEADING_REGISTER_NEW} <button className="boton_registro" role='button' onClick={() => setShow(true)}>
            {LANGUAGES[language].REGISTER.HEADING_REGISTER}</button>
            </h3>
            <Registro show={show} toggleShow={setShow}></Registro>
          </div>
        </div>
      </div>
    </>
  );
};
