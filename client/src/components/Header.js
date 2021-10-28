import "../styles/structure.css";
import { Link } from "react-router-dom";

function Header(props) {
  function clearState() {
    props.setAccount({
      balance: "0",
      first: "",
      last: "",
    });
    props.setRecords([]);
  }

  return (
    <div id="header-wrapper">
      <header>
        <h3 id="company">Freedman Financial</h3>
        <nav>
          <ul>
            {/* <li>John Doe</li> */}
            <li id="name">{props.account.first + " " + props.account.last}</li>

            <li>
              <Link
                onClick={() => {
                  clearState();
                }}
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
