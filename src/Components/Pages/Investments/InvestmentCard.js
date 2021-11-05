import React from "react";
import "./Investment.css";
const InvestmentCard = ({ investCard }) => {
  const { photo, name, driscription } = investCard;
  return (
    <div className="col-lg-3 col-md-4 col-7 mx-auto">
      <div className="card border-0 investment-card shadow rounded-3 p-3 mb-5 bg-body rounded">
        <img
          src={photo}
          className="card-img-top img-fluid img-investment "
          width="50px"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-start">{name}</h5>
          <p className="card-text text-start">{driscription}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
