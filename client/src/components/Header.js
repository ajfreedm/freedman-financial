import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function Header() {
  return (
    <div id="container">
    <header>
      Andrew Freedman
     <Link>Logout</Link>
        
        
    </header>
    </div>

  );
}

export default Header;
