// styles
import "./Header.css";

const Header: React.FC = () => (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="www.google.com">
          <span className="navbar-logo ms-5"></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mx-auto">
            <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center">
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="www.google.com"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  BIKES
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  GEAR
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  PARTS
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  TIRES
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  SERVICE-INFO
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  CATALOGUES
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="www.google.com">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-3 me-5">
            <a href="#" className="text-secondary">
              <i className="fas fa-search fa-lg"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fas fa-shopping-bag fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
