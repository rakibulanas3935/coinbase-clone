import React, { useEffect, useState } from "react";
import "./Investment.css";
import InvestmentCard from "./InvestmentCard";

const Investments = () => {
  const [invest, setInvest] = useState([]);

  useEffect(() => {
    fetch("../../../../investment.json")
      .then((res) => res.json())
      .then((data) => setInvest(data));
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <h2 className="text-start fw-ligh mb-4">Our Investments</h2>
        {invest.map((invests) => (
          <InvestmentCard
            investCard={invests}
            key={invests.id}
          ></InvestmentCard>
        ))}
      </div>
    </div>
  );
};

export default Investments;
