import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

import "./Navigation.css";
const Navigation = () => {
  // use state for clicking

  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const handleClick1 = () => {
    setClick1(!click1);
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
  const handleClick3 = () => {
    setClick3(!click3);
  };
  const handleClick4 = () => {
    setClick4(!click4);
  };

  const down = "fas fa-angle-up d-lg-none responsive d-inline";
  const up = "fas fa-angle-down d-lg-none responsive d-inline";

  return (
    //navigation start
    <nav className="navbar navbar-expand-lg navbar-background mb-5 p-lg-0 p-2 sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
            alt=""
            width="120"
            height="30"
          />
        </a>
        <button class="btn  btn-primary ms-auto me-3 d-lg-none " type="submit">
          Get started
        </button>
        {/* toggler navigation  */}
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

            {/* learn part start */}

            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
                onClick={handleClick}
              >
                Learn
                <i className={click ? down : up}></i>
              </NavLink>

              <div
                className="dropdown-menu megamenushadow p-lg-4 p-4 megamenu"
                role="menu"
              >
                <div className="row">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-2 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto">
                        <li className="mb-lg-0 mb-3">
                          <a href="/" className="icon-link">
                            <i className="fas fa-chevron-right icon d-none d-lg-inline"></i>
                            Tips and Tutorials
                          </a>
                        </li>
                        <li className="mb-lg-0 mb-3">
                          <a href="/" className="icon-link">
                            <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                            Cypto basics
                          </a>
                        </li>
                        <li className="mb-lg-0 mb-3">
                          <a href="/" className="icon-link">
                            <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                            Market updates
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-12">
                    <div className="col-megamenu">
                      <ul className="list-unstyled mx-auto d-none d-lg-inline">
                        <li>
                          <h6 className="learn-head">
                            Crypto questions, answered
                          </h6>
                        </li>

                        <li>
                          <h6 className="learn-discription">
                            Guides and explainers for your crypto questions
                          </h6>
                        </li>
                        <li>
                          <a href="/" className="all-link">
                            See all articles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </li>

            {/* leaarn parts end */}

            {/* Individuasls part start */}

            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
                onClick={handleClick1}
              >
                Individuals
                <i className={click1 ? down : up}></i>
              </NavLink>
              <div
                className="dropdown-menu megamenushadow border-0 m-0 p-lg-4 p-4 megamenu"
                role="menu"
              >
                <div className="container">
                  <div className="row g-lg-4 g-0">
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu ">
                        <ul className="list-unstyled mx-auto">
                          <li className="d-flex  align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h4 className="text1 i-head mb-lg-0 mb-3">
                                Buy and cell
                              </h4>
                              <p className="text2 i-discription d-none d-lg-inline">
                                Buy and cell crypto
                              </p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg"
                              alt=""
                              className="img-fluid mx-3 dropdwon-img d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Earn
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Learn and earn crypto
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/4mo5MpvlVj04YOVoyLr7wM/4f246f6bd1ef15915397eb56d5945477/PrivateClient_-_Round.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Private Clients
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                For trusts, family offices,UHNWIs
                              </h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto">
                          <li className="d-flex  align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Wallet
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                The best self-hosted crypto Wallet
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg"
                              alt=""
                              className="img-fluid mx-3 dropdwon-img d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Card
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Spend crypto, earn crypto rewards
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/c5bd0wqjc7v0/7ovHlKMEAQfCktgQMmZ6LD/be529000f4a94e82334567e212223de2/Borrow_Round.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Borrow
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Borrow cash using Bitcoin as collateral
                              </h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto d-none d-lg-inline">
                          <li className=" mb-2">
                            <h6 className="learn-head">
                              Crypto tools for everyone
                            </h6>
                            <h6 className="learn-discription">
                              Buy, sell, and spend crypto on the world's most
                              trusted crypto exchange
                            </h6>
                          </li>
                          <li>
                            <a href="/" className="all-link">
                              See all articles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* individuals part end */}

            {/* business part start */}

            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
                onClick={handleClick2}
              >
                Business
                <i className={click2 ? down : up}></i>
              </NavLink>
              <div
                className="dropdown-menu megamenushadow border-0 p-lg-4 p-4 megamenu"
                role="menu"
              >
                <div className="container">
                  <div className="row g-lg-4 g-0 justify-content-around">
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu ">
                        <ul className="list-unstyled mx-auto">
                          <li className="d-flex  align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/1B2lWSiOAFK6CitniZDOm6/a38890c20ba91c7d730fde6eb1d9bb3e/prime-icon.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h4 className="text1 i-head mb-lg-0 mb-3">
                                Prime
                              </h4>
                              <p className="text2 i-discription d-none d-lg-inline">
                                The prime brokerage platform
                              </p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/EtdyFCX7iknLgMd8QmEFE/3b11e239601461f579b1fd6e14284b36/custody-icon.svg"
                              alt=""
                              className="img-fluid mx-3 dropdwon-img d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Custody
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Institutional-grade offline storage
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/77qCpUqwyp7meN68z2VTPI/9799d37f5b6510c01373048aa956c01d/exchange.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Exchange
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Direct access to our exchange
                              </h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto">
                          <li className="d-flex  align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/1ke3aZrKAkc57nbjxVTMtc/85533126e5dfd8d62907775d3b124cf9/commerce-icon.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Commerce
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Accept crypto from anyone
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/3wsZt9X1TIvwxxsy7LmLIs/6e41f591a9d47a3a9e3bd9b02a856366/asset-hub-icon.svg"
                              alt=""
                              className="img-fluid mx-3 dropdwon-img d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Asset Hub
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                List your asset on Coinbase
                              </h6>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <img
                              src="https://images.ctfassets.net/q5ulk4bp65r7/47VkMq5Z5yfzsAzbWR4E4S/432b13e65904574770873b1206f81bb7/round_analytics.svg"
                              alt=""
                              className="img-fluid dropdwon-img mx-3 d-none d-lg-inline"
                            />
                            <div className="dropdown-text">
                              <h6 className="text1 i-head mb-lg-0 mb-3">
                                Analytics
                              </h6>
                              <h6 className="text2 i-discription d-none d-lg-inline">
                                Power your crypto compliance
                              </h6>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto d-none d-lg-inline">
                          <li className=" mb-2">
                            <h6 className="learn-head">
                              Built for businesses and institutions
                            </h6>
                            <h6 className="learn-discription">
                              Crypto solutions for institutional <br />
                              investors, family offices, and businesses
                            </h6>
                          </li>
                          <li>
                            <a href="/" className="all-link">
                              See all articles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* business part end */}
            {/* developers part start */}

            <li class="nav-item item mx-2 dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
                onClick={handleClick3}
              >
                Developers<i className={click3 ? down : up}></i>
              </NavLink>
              <div
                className="dropdown-menu megamenushadow p-lg-4 p-4  border-0 megamenu"
                role="menu"
              >
                <div className="container">
                  <div className="row g-lg-4 g-0">
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto">
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Connect
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Enable users to buy, sell, and store crypto
                            </h6>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Commerce
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Accept crypto from anyone
                            </h6>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Market Pro
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Programmatically manage crypto
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled">
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Connect
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Enable users to buy, sell, and store crypto
                            </h6>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Commerce
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Accept crypto from anyone
                            </h6>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link1">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              Market Pro
                            </a>
                            <h6 className="i-discription ms-3 mb-2 d-none d-lg-inline">
                              Programmatically manage crypto
                            </h6>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto d-none d-lg-inline">
                          <li>
                            <h6 className="learn-discription">
                              Crypto questions, answered
                            </h6>
                          </li>

                          <li>
                            <h6>
                              Guides and explainers for your crypto questions
                            </h6>
                          </li>
                          <li>
                            <a href="/" className="all-link">
                              See all articles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* devilopers part end  */}
            {/* company */}

            <li className="nav-item item mx-2  dropdown has-megamenu">
              <NavLink
                class="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
                onClick={handleClick4}
              >
                Company
                <i className={click4 ? down : up}></i>
              </NavLink>
              <div
                className="dropdown-menu megamenushadow  border-0 megamenu"
                role="menu"
              >
                <div className="container">
                  <div className="row d-lg-flex g-0 ">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled mx-auto">
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link">
                              <i className="fas fa-chevron-right d-none d-lg-inline"></i>
                              About
                            </a>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link ">
                              <i className="fas fa-chevron-right d-lg-inline d-none"></i>
                              Affiliates
                            </a>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link ">
                              <i className="fas fa-chevron-right d-lg-inline d-none"></i>
                              Blog
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12">
                      <div className="col-megamenu ">
                        <ul className="list-unstyled mx-auto">
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link ">
                              <i className="fas fa-chevron-right d-lg-inline d-none"></i>
                              Careers
                            </a>
                          </li>
                          <li className="mb-lg-0 mb-3">
                            <a href="/" className="icon-link ">
                              <i className="fas fa-chevron-right d-lg-inline d-none"></i>
                              Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-12">
                      <div className="col-megamenu">
                        <ul className="list-unstyled d-none d-lg-inline mx-auto">
                          <li>
                            <h6 className="learn-head">
                              Crypto questions, answered
                            </h6>
                          </li>

                          <li>
                            <h6 className="learn-discription ">
                              Guides and explainers for your crypto questions
                            </h6>
                          </li>
                          <li>
                            <a href="/" className="all-link">
                              See all articles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>
              </div>
            </li>

            {/* Company send */}
          </ul>
          <div className="d-flex flex-column-reverse flex-lg-row">
            <div>
              <a
                className="nav-link sing-in w-sm-100"
                href="/"
                tabindex="-1"
                aria-disabled="true"
              >
                Sing in
              </a>
            </div>
            <div>
              <button class="btn btn-nav btn-primary w-100 mb-2" type="submit">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
