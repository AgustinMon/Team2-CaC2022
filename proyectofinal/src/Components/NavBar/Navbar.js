import "./navbar.css";
import { Buscador } from "../Buscador/Buscador";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Idioma from "../Idioma/Idioma";
import { useContext } from "react";
import MainContext from "../../Context/MainContext";
import { LANGUAGES } from "../../Constants/languages";


export default function NavBar(props) {

  const { language } = useContext(MainContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="#home"><img alt="Logo" src={props.src} width={props.size} className="d-inline-block align-top"/></Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/Home" activeClassname>{LANGUAGES[language].NAVBAR.HOME}</Link>
          <Link className="nav-link" to="../Series">{LANGUAGES[language].NAVBAR.SERIES}</Link>
          <Link className="nav-link" to="../Peliculas">{LANGUAGES[language].NAVBAR.MOVIES}</Link>
          <Link className="nav-link" to="../LogIn">{LANGUAGES[language].LOGIN.HEADING_LOGIN}</Link>
        </Nav>
        <ButtonGroup className="buttonGroup">
        <Buscador />
          </ButtonGroup>
          <Idioma></Idioma>
          <Button type="submit" className="Login">{LANGUAGES[language].LOGIN.HEADING_LOGIN}</Button>{' '}  
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  size: 90,
};
