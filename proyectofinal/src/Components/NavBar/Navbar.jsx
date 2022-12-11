import "./navbar.css";
import { Buscador } from "../Buscador/Buscador";
import DarkMode from "../DarkMode/DarkMode"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link, useNavigate } from "react-router-dom";
import Idioma from "../Idioma/Idioma";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";
import { TIPO_PELICULA, TIPO_SERIE } from "../../Constants/constants";
import ModalUsers from "../ModalUsers/ModalUsers";
import { useState } from "react";

export default function NavBar(props) {
  const { language, user, changeUser, typeFilm, changeTypeFilm } =
    useContext(MainContext);
  const [popUpUser, setPopUpUser] = useState(false);
  const navigate = useNavigate();

  const logOut = (e) => {
    changeUser(e, null);
    navigate("/Login");
  };

  const setFilms = (e) => {
    changeTypeFilm(e, TIPO_PELICULA);
  };

  const setSeries = (e) => {
    changeTypeFilm(e, TIPO_SERIE);
  };

  const popUpUserMenu = (e) => {
    setPopUpUser(!popUpUser);
  }

  const UserMenuLeave = (e) => {
    setPopUpUser(false);
  }

  return (
    <Navbar style={{height: '75px'}}>
      <Container>
        <Navbar.Brand to="#home">
          <img
            alt="Logo"
            src={props.src}
            width={props.size}
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        { (window.location.toString().toLowerCase().indexOf("/login") == -1 
            && window.location.toString().toLowerCase().indexOf("/perfiles") == -1
            && window.location.toString().toLowerCase().indexOf("/team2-cac2022") == -1
          )
          &&
        <Nav className="me-auto">
          {user ? (
            <>
              <Link className="nav-link" to="/Home" activeClassname>
                {LANGUAGES[language].NAVBAR.HOME}
              </Link>
              <button
                className={
                  typeFilm && typeFilm == TIPO_SERIE ? "subrayado" : ""
                }
                onClick={setSeries}
              >
                {LANGUAGES[language].NAVBAR.SERIES}
              </button>
              <button
                className={
                  typeFilm && typeFilm == TIPO_PELICULA ? "subrayado" : ""
                }
                onClick={setFilms}
              >
                {LANGUAGES[language].NAVBAR.MOVIES}
              </button>
            </>
          ) : (
            <Link className="nav-link" to="../LogIn">
              {LANGUAGES[language].LOGIN.HEADING_LOGIN}
            </Link>
          )}
        </Nav>}
        { (window.location.toString().toLowerCase().indexOf("login") == -1 
            && window.location.toString().toLowerCase().indexOf("/perfiles") == -1
            && window.location.toString().toLowerCase().indexOf("/team2-cac2022") == -1
          )
          && <div className="contenedor_busqueda_darkmode">
          <ButtonGroup className="buttonGroup">
            <Buscador />
          </ButtonGroup>
          <Button type="submit" className="Login" 
            onClick={
              ()=> {popUpUserMenu()}
            } 
            onMouseLeave={
              ()=> {UserMenuLeave()}
            }
          >
            {user ? user : LANGUAGES[language].LOGIN.HEADING_LOGIN}
          {
            popUpUser? <ModalUsers></ModalUsers> : ""
          }
          </Button>{" "}
          <DarkMode></DarkMode>
        </div>}
        {!user && <Idioma></Idioma>}
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  size: 90,
};
