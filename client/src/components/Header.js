import '../styles/structure.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function Header() {
  return (
    <div id="header-wrapper">
    <header>
    <nav>
      <ul>    
      <li>Andrew Freedman</li>
     <li><Link>Logout</Link></li>
     </ul>
     </nav>
      </header>
      
    </div>

  );
}

export default Header;
