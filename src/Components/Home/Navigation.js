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
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto nav-hover mb-2 mb-lg-0">
            <li className="nav-item item mx-2">
              <a className="nav-link" aria-current="page" href="/">
                Prices
              </a>
            </li>

            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Link
              </NavLink>
              <div
                className="dropdown-menu shadow-sm  border-0 megamenu"
                role="menu"
              >
                <div className="row ">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li>
                          <a href="/">
                            <i className="fas fa-chevron-right"></i> Tips and
                            Tutorials
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fas fa-chevron-right"></i>Cypto basics
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="fas fa-chevron-right"></i>Market
                            updates
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li>
                          <h6>Crypto questions, answered</h6>
                        </li>

                        <li>
                          <h6>
                            Guides and explainers for your crypto questions
                          </h6>
                        </li>
                        <li>
                          <a href="/">See all articles</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </li>
            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Individuals
              </NavLink>
              <div
                className="dropdown-menu shadow-sm  border-0 megamenu"
                role="menu"
              >
                <div className="row g-3">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className="d-flex  align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Buy and cell</h6>
                            <h6 className="text2">Buy and cell crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg"
                            alt=""
                            className="img-fluid mx-3 dropdwon-img "
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Earn</h6>
                            <h6 className="text2">Learn and earn crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Private Clients</h6>
                            <h6 className="text2">
                              For trusts, family offices, UHNWIs
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className="d-flex  align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Buy and cell</h6>
                            <h6 className="text2">Buy and cell crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg"
                            alt=""
                            className="img-fluid mx-3 dropdwon-img "
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Earn</h6>
                            <h6 className="text2">Learn and earn crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/c5bd0wqjc7v0/7ovHlKMEAQfCktgQMmZ6LD/be529000f4a94e82334567e212223de2/Borrow_Round.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Private Clients</h6>
                            <h6 className="text2">
                              For trusts, family offices, UHNWIs
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className=" mb-2">
                          <h6>Built for businesses and institutions</h6>
                          <h6>
                            Buy, sell, and spend crypto on the world's most
                            trusted crypto exchange
                          </h6>
                        </li>
                        <li>
                          <a href="/">See all articles</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
            </li>
            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Businesses
              </NavLink>
              <div
                className="dropdown-menu shadow-sm  border-0 megamenu"
                role="menu"
              >
                <div className="row g-3">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className="d-flex  align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Buy and cell</h6>
                            <h6 className="text2">Buy and cell crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg"
                            alt=""
                            className="img-fluid mx-3 dropdwon-img "
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Earn</h6>
                            <h6 className="text2">Learn and earn crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Private Clients</h6>
                            <h6 className="text2">
                              For trusts, family offices, UHNWIs
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className="d-flex  align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Buy and cell</h6>
                            <h6 className="text2">Buy and cell crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg"
                            alt=""
                            className="img-fluid mx-3 dropdwon-img "
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Earn</h6>
                            <h6 className="text2">Learn and earn crypto</h6>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <img
                            src="https://images.ctfassets.net/c5bd0wqjc7v0/7ovHlKMEAQfCktgQMmZ6LD/be529000f4a94e82334567e212223de2/Borrow_Round.svg"
                            alt=""
                            className="img-fluid dropdwon-img mx-3"
                          />
                          <div className="dropdown-text">
                            <h6 className="text1">Private Clients</h6>
                            <h6 className="text2">
                              For trusts, family offices, UHNWIs
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className=" mb-2">
                          <h6>Built for businesses and institutions</h6>
                          <h6>
                            Buy, sell, and spend crypto on the world's most
                            trusted crypto exchange
                          </h6>
                        </li>
                        <li>
                          <a href="/">See all articles</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
            </li>
          </ul>
          <div class="d-flex">
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">
              Sing up
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
