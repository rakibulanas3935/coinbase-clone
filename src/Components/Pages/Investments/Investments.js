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
    <div className="container-fluid mt-5 mb-5">
      <div className="container mt-5 mb-5">
        <div className="row g-2 align-items-center">
          <h2 className="text-start investment mb-4">Our Investments</h2>
          {invest.map((invests) => (
            <InvestmentCard
              investCard={invests}
              key={invests.id}
            ></InvestmentCard>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Investments;
