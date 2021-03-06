import React from "react";
import "./story.css";
const Story = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="container mt-5 mb-5">
        <h1 className="text-start mb-4 story-title mt-4">Our Story</h1>
        <div className="row mb-5">
          <p className="col-12 story-details text-start">
            At Coinbase, we’re committed to creating an open financial system
            for the world. We can’t do it alone, and we’re eagerly rooting for
            the brightest minds in the crypto ecosystem to build empowering
            products for everyone.
            <br />
            <br />
            We provide financing to promising early stage companies that have
            the teams and ideas that can move the space forward in a positive,
            meaningful way.
            <br />
            <br />
            We’re taking a long term view of the space, and we believe that
            multiple approaches are healthy and good. Our goal is simply to help
            the most compelling companies in the space.
            <span>
              Learn more <i class="fas fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Story;
