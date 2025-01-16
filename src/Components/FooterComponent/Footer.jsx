import { Link } from 'react-router-dom'
import './Footer.scss'

export const Footer = () =>{
    return(
   <footer>
      <ul>
      <li><Link id="verdensMålene" to="/">Footer</Link></li>
      </ul>
   </footer>
    )
}

