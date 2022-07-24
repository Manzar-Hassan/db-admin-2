import React from "react";
import { Link } from "react-router-dom";

function GrowIn() {
  return (
    <div className="col-lg-6">
      <div className="card position-relative">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Grow In Animation Utilty
          </h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <code>.animated--grow-in</code>
          </div>
          <div className="small mb-1">Navbar Dropdown Example:</div>
          <nav className="navbar navbar-expand navbar-light bg-light mb-4">
            <Link className="navbar-brand" to="/Animations">
              Navbar
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/Animation"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right animated--grow-in"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/Animations">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="/Animations">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/Animations">
                    Something else here
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          <p className="mb-0 small">
            Note: This utility animates the CSS transform property, meaning it
            will override any existing transforms on an element being animated!
            In this theme, the grow in animation is only being used on dropdowns
            within the navbar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrowIn;
