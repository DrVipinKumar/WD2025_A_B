import { NavLink } from "react-router-dom";
const Header = () => {
  const setActive = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <div>
      <nav
        className="navbar rounded bg-primary navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React JS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={setActive}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/counter">
                  Counter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/form">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/table">
                  Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={setActive} to="/query">
                  Language
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
