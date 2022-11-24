import app from '../../Services/Firebase';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword, signInWithPopup, linkWithPopup} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';

import "./login.css";

export const Login = () => {
 

  const googleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const SignIn = (ev) => {
    ev.preventDefault();
    let email = ev.target[0].value;
    let password = ev.target[1].value;
    ConnectWithEmail(email, password);
  }

  const ConnectWithEmail = (email, password)=>{
    const auth = getAuth(app);
    const user = signInWithEmailAndPassword(auth, email, password)
    .then((credentials) =>{
      console.log("credentials OK", credentials);
      const firebase_user = credentials.user;
      // cargar user en contexto
    })
    .then(()=>navigate(`/Home`))
    .catch( (error)=> {
      document.getElementById("error-signin").style.visibility = "visible";
      console.log(error.code);
      console.log(error.message);
    })
  }

  const ConnectWithPopUp = (provider)=>{
    const auth = getAuth(app);
    const popUp = signInWithPopup(auth, provider)
    .then((credentials)=>{
      console.log("credentials ok", credentials);
    })
    .then(()=>navigate(`/Home`))
    .catch((error)=>{
      console.log(error.code);
      console.log(error.message);
    })
  }

  return (
    <>
      <div className="fondo">
        <div className="contenedor">
        <h1>Películas y series ilimitadas y mucho más</h1>
        <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
        <p>Esta es una web que simula Netflix, no es real, no introduzcas datos sensibles.</p>
        <h2>Log In</h2>
        <p style={{backgroundColor:'#005500'}}>Prueba: team2@team2.com 123456</p> 
        <form className="formulario" id="signin" onSubmit={SignIn}>
          <input type="email" className="input-email mt-2"/>
          <input type="password" className="input-email mt-2"/>
          <input type="submit" className="btn btn-danger btn-lg" value="Sign In"/>
          <p className='error-signin' id='error-signin'>Hay un error en el email o la contraseña.</p>
        </form>
        <p><button className="btn btn-outline-light" onClick={()=>ConnectWithPopUp(googleAuthProvider)}>Sign In with Google</button></p>

        <p>TODO: Restablecer contraseña...</p>
        <p>TODO: Eliminar nav del login...</p>
        <br/><br/><br/><br/>
        <h2 className="mt-4">O Registrese</h2>
        <p style={{backgroundColor:'#550000'}}>Registro desde la web no implementado</p> 
        <form className="formulario">
          <input type="email" className="input-email"/>
          <input type="submit" className="btn btn-danger btn-lg" value="Regístrese"/>
        </form>
        </div>
      </div>
    </>
  );
};
