import React from "react";
import header from "./header.webp";
import "./animation.css";
const Header = () => {
  return (
    <div className="container-fluid header mt-5 mb-5">
      <div className="container header mt-5">
        <div className="row g-4 align-items-center mb-5">
          <div className="col-md-6 col-sm-12">
            <h1 className="text-start text-dark  mb-2 title">
              Empowering The
              <br />
              Open Financial
              <br />
              System
            </h1>
            <h3 className="text-start details">
              Coinbase Ventures invests in
              <br className="d-none d-lg-block" />
              companies building the open financial
              <br className="d-none d-lg-block" />
              system.
            </h3>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={header} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
