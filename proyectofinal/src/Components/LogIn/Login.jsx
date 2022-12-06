import app from "../../Services/Firebase";
import { useNavigate } from "react-router-dom";
import {UserProfileModel} from "../../Models/UserProfileModel";
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

export const Login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const { language, changeLanguage, changeUser,toggleDarkMode } = useContext(MainContext);

  const SignIn = (ev) => {
    ev.preventDefault();
    let email = ev.target[0].value;
    let password = ev.target[1].value;
    ConnectWithEmail(email, password);
  };

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

  const ConnectAndRegister = (newUser) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // una vez creado el user en Auth, agregamos el perfil en Firestore
        // new user toma la estructura del modelo
        const newUserProfile = UserProfileModel;
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
            navigate(`/Perfiles`);
          }
        )
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
        <div className="contenedor">
          <h1>{LANGUAGES[language].LOGIN.TITLE}</h1>
          <h3>{LANGUAGES[language].LOGIN.SUBTITLE}</h3>
          <p>{LANGUAGES[language].LOGIN.DESCRIPTION}</p>
          <form className="formulario" id="signin" onSubmit={SignIn}>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_USERNAME}:</label>{" "}
              <input
                type="email"
                className="input-email mt-2"
                id="input-email"
                placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_EMAIL}
              />
            </legend>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_PASS}:</label>{" "}
              <input type="password" className="input-email mt-2" placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_PASS}/>
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
              className="btn btn-outline-light"
              onClick={() => ConnectWithPopUp(googleAuthProvider)}
            >
              {LANGUAGES[language].LOGIN.GOOGLE}
            </button>
            <button
              className="btn btn-outline-light"
              onClick={ResetPassword}
              href="#"
            >
              {LANGUAGES[language].LOGIN.RESTORE_PASS}
            </button>
          </p>
          <p style={{ backgroundColor: "#005500" }}>{LANGUAGES[language].LOGIN.INPUT_EXAMPLE}</p>
          <span className="error reset-password" id="error-reset-password">
            {LANGUAGES[language].LOGIN.MAIL_ERROR}
          </span>
          <span className="error email-sent" id="error-reset-sent">
            {LANGUAGES[language].LOGIN.MAIL_SUCCESS}
          </span>
          <br />
          <hr/>
          <h2 className="mt-4">{LANGUAGES[language].REGISTER.HEADING_REGISTER}</h2>
          <form className="formulario" onSubmit={Register}>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_USERNAME} (email):</label>
              <input type="email" className="input-email form-control-lg" 
              placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_EMAIL}
              />
            </legend>
            <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_PASS}:</label>
              <input
                type="password"
                className="input-email mt-2  form-control-lg"
                placeholder={LANGUAGES[language].LOGIN.INPUT_PLACEHOLDER_PASS}
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
            {/* <legend>
              <label>{LANGUAGES[language].REGISTER.INPUT_NAME}:</label>
              <input type="text" size="15" className="input-email form-control-lg" 
              placeholder={LANGUAGES[language].REGISTER.INPUT_NAME_PLACEHOLDER}
              />
            </legend>
            <legend>
              <label>Idioma:</label>
              <select className="form-select form-select-lg text-dark" name="language" id="setLang">
                <option value="es">Español</option>
                <option value="en">Ingles</option>
              </select>
            </legend>
            <legend>
              <label>Edad:</label>
              <input type="number" min="0" max="100" className="input-edad  form-control-lg"  placeholder="Indique edad" />
            </legend>
            <legend>
              <label>Logo:</label>
              <select className="form-select form-select-lg" name="logo" id="setlogo">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </legend> */}
            <input
              type="submit"
              className="btn btn-danger btn-lg mb-4"
              value={LANGUAGES[language].REGISTER.HEADING_REGISTER}
            />
          </form>
        </div>
      </div>
    </>
  );
};
