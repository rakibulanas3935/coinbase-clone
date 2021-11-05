import React from "react";
import { NavLink } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="header-inner mb-5">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid p-2">
            <NavLink className="navbar-brand logo" href="#">
              coinbase
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" aria-current="page" href="#">
                    Price
                  </NavLink>
                </li>
                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" href="#">
                    Learn
                  </NavLink>
                </li>

                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" href="#">
                    Business
                  </NavLink>
                </li>
                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" href="#">
                    Developed
                  </NavLink>
                </li>
                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" href="#">
                    Individuals
                  </NavLink>
                </li>
                <li class="nav-item-sm hover mx-3">
                  <NavLink class="nav-link" href="#" tabindex="-1">
                    Company
                  </NavLink>
                </li>
              </ul>
              <div class="d-flex">
                <NavLink class="nav-link" href="#" tabindex="-1">
                  Disabled
                </NavLink>
                <button class="btn btn-primary" type="submit">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
