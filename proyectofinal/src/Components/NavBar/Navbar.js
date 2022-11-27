import "./navbar.css";
import { Buscador } from "../Buscador/Buscador";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useNavigate } from "react-router-dom";
import Idioma from "../Idioma/Idioma";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";
import { TIPO_PELICULA, TIPO_SERIE } from "../../Constants/constants";

export default function NavBar(props) {

  const { language, user, changeUser, typeFilm, changeTypeFilm } = useContext(MainContext);
  const navigate = useNavigate();

  const logOut = (e)=>{
    changeUser(e, null);
    navigate('/Login');
  }

  const setFilms = (e)=>{
    changeTypeFilm(e, TIPO_PELICULA);
  }

  const setSeries = (e)=>{
    changeTypeFilm(e, TIPO_SERIE);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="#home"><img alt="Logo" src={props.src} width={props.size} className="d-inline-block align-top"/></Navbar.Brand>
        <Nav className="me-auto">
          {
            user?
            <>
            <Link className="nav-link" to="/Home" activeClassname>{LANGUAGES[language].NAVBAR.HOME}</Link>
            <button className={typeFilm && typeFilm == TIPO_SERIE? "subrayado" : ""} onClick={setSeries}>{LANGUAGES[language].NAVBAR.SERIES}</button>
            <button className={typeFilm && typeFilm == TIPO_PELICULA? "subrayado" : ""} onClick={setFilms}>{LANGUAGES[language].NAVBAR.MOVIES}</button>
            <button onClick={logOut}>LogOut</button>
            </>
            :
            <Link className="nav-link" to="../LogIn">{LANGUAGES[language].LOGIN.HEADING_LOGIN}</Link>
          }
          
        </Nav>
        <ButtonGroup className="buttonGroup">
        <Buscador />
          </ButtonGroup>
          <Idioma></Idioma>
          <Button type="submit" className="Login">{user? user : LANGUAGES[language].LOGIN.HEADING_LOGIN}</Button>{' '}  
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  size: 90,
};
