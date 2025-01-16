import { Link } from "react-router-dom";
import './Nav.scss'

export const Navbar = () => {
return (
  <>
    <nav>
        <ul>
            <li><Link id="verdensMålene" to="/">React Memory Game</Link></li>
           
        </ul>
    </nav>
    </>
)
};