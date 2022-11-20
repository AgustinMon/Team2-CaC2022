import {app} from '../../Services/Firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import "./login.css";

export const Login = () => {

  const email = '';
  const password = '';
  /*const auth = getAuth(app);
  const user = signInWithEmailAndPassword(auth, email, password)
  .then((credentials) =>{
    console.log(credentials);
    const firebase_user = credentials.user;
    // cargar user en contexto
  })
  .catch( (error)=> {
    console.log(error.code);
    console.log(error.message);
  })*/

  const user = ()=> true;
  
  return (
    <>
      <div className="fondo">
        <div className="contenedor">
        <h1>Películas y series ilimitadas y mucho más</h1>
        <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
        <p>Esta es una web que simula Netflix, no es real, no introduzcas datos sensibles.</p>
        <div className="formulario">
          <input type="email" className="input-email"/>
          <input type="submit" className="btn btn-danger btn-lg" value="Comenzar"/>
        </div>
        </div>
      </div>
    </>
  );
};
