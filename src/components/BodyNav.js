import React, { useState } from "react";
import Badge from "./Badge";

function BodyNav() {
  const [decision, setDecision] = useState("I WANT TO");
  const count = 5;
  return (
    <div className="App-bodyNav">
      <nav className="navbar navbar-bodyNav">
        <div className="container-fluid  bodynav-">
          <i className="fa-solid case-icon fa-briefcase"></i>
          <p className="navNameAccounts">Accounts</p>
          <div className="dropdown">
            <a
              className="nav-link  dropdownName dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              {decision}
            </a>
            <ul className="dropdown-menu ">
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setDecision("option-1")}
                >
                  Option 1 
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setDecision("option2")}
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BodyNav;
