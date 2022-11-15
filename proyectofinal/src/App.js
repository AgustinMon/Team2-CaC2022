import './App.css';
import Rutas from './Routes/Rutas';
import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from'./Components/NavBar/logoipsum-250.svg'

function App() {
  return (
    <div className="App">
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
