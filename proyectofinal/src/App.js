import './App.css';
import Rutas from './Routes/Rutas';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
        <Rutas>
          <Navbar></Navbar>
        </Rutas>
    </div>
  );
}

export default App;
