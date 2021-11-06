import React from "react";
import { NavLink } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background mb-5 navbar-light sticky-top">
      <div className="container shadow-sm">
        <a className="navbar-brand" href="#">
          coinbase
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto nav-hover mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>

            <li class="nav-item mx-2 dropdown has-megamenu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Mega menu
              </a>
              <div class="dropdown-menu megamenu" role="menu">
                <div class="row g-3">
                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Two</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Three</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item mx-2 dropdown has-megamenu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Mega menu
              </a>
              <div class="dropdown-menu megamenu" role="menu">
                <div class="row g-3">
                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Two</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Three</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item mx-2 dropdown has-megamenu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Mega menu
              </a>
              <div class="dropdown-menu megamenu" role="menu">
                <div class="row g-3">
                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Two</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-3 col-6">
                    <div class="col-megamenu">
                      <h6 class="title">Title Menu Three</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                        <li>
                          <a href="#">Custom Menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item mx-2">
              <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <div class="d-flex">
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
              Disabled
            </a>
            <button class="btn btn-primary" type="submit">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
