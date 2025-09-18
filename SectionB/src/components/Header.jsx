import { NavLink } from "react-router-dom";
const Header = () => {
  const setActive = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid bg-primary">
        <NavLink className="navbar-brand text-light" to="/">
          ReactJS
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
                aria-current="page"
                to="/"
                style={setActive}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/form" style={setActive}>
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/table" style={setActive}>
                Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/counter" style={setActive}>
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lang" style={setActive}>
                Languages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/query" style={setActive}>
                Query
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/useeffect" style={setActive}>
                UseEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usecontext" style={setActive}>
                UseContext
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usereducer" style={setActive}>
                UseReducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usememo" style={setActive}>
                UseMemo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/usecallback" style={setActive}>
                UseCallback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/useref" style={setActive}>
                UseRef
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
