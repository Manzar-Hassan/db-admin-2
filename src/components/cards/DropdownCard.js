import React from "react";
import { Link } from "react-router-dom";

function DropdownCard() {
  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Dropdown --> */}
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">
          Dropdown Card Example
        </h6>
        <div className="dropdown no-arrow">
          <a
            className="dropdown-toggle"
            href="/Cards"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            aria-labelledby="dropdownMenuLink"
          >
            <div className="dropdown-header">Dropdown Header:</div>
            <Link className="dropdown-item" to="/Cards">
              Action
            </Link>
            <Link className="dropdown-item" to="/Cards">
              Another action
            </Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/Cards">
              Something else here
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Card Body --> */}
      <div className="card-body">
        Dropdown menus can be placed in the card header in order to extend the
        functionality of a basic card. In this dropdown card example, the Font
        Awesome vertical ellipsis icon in the card header can be clicked on in
        order to toggle a dropdown menu.
      </div>
    </div>
  );
}

export default DropdownCard;
