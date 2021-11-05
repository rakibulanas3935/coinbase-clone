import React from "react";
import header from "./header.webp";
import "./animation.css";
const Header = () => {
  return (
    <div className="container-fluid header mt-5">
      <div className="row g-4 align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-5 col-sm-12">
          <h1 className="text-start mb-5 title">
            Empowering The Open Financial System
          </h1>
          <h3 className="text-start  mb-5">
            Coinbase Ventures invests in companies building the open financial
            system.
          </h3>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={header} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
