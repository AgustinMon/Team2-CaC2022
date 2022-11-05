import {Link} from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
            </nav>
    )
}