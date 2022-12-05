import './App.css';
import { useContext } from 'react';
import Rutas from './Routes/Rutas';
import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from'./Assets/Fakeflix_logo.png'
import MainContext from './Context/MainContext';

function App() {

  const {darkMode} = useContext(MainContext);

  return (

      <div darkmode={`${darkMode}`} className="App">
          <Rutas> 
            {/* El programa inicia en Rutas que administra los enlaces.
                Navbar pasa como componente a todos los elementos 
            */}
            <NavBar src={logo} size={200}></NavBar>
            {/* Luego aparecen las paginas por debajo. */}
          </Rutas>
      </div>

  );
}

export default App;
