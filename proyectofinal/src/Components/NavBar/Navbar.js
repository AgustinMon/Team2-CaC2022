import "./navbar.css";
import { Buscador } from "../Buscador/Buscador";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="#home"><img alt="Logo" src={props.src} width={props.size} className="d-inline-block align-top"/></Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/Home" activeClassname>Home</Link>
          <Link className="nav-link" to="../Series">Series</Link>
          <Link className="nav-link" to="../Peliculas">Peliculas</Link>
          <Link className="nav-link" to="../LogIn">Login</Link>
        </Nav>
        <ButtonGroup className="buttonGroup">
        <Buscador />
          </ButtonGroup>
          <Button type="submit" className="Login">LOGIN</Button>{' '}  
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  size: 90,
};
