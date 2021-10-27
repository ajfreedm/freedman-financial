import '../styles/structure.css'
import {Link} from 'react-router-dom';





function Header(props) {
  return (
    <div id="header-wrapper">
    <header>
    <h3 id="company">Freedman Financial</h3>
    <nav>
      <ul>  
          
      {/* <li>John Doe</li> */}
      <li>{props.account.first + ' ' + props.account.last}</li>


     <li><Link to = '/'>Logout</Link></li>
     
     </ul>
     </nav>
      </header>
      
    </div>

  );
}

export default Header;
