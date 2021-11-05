import React from "react";

import "./Library.css";
const LibraryCard = ({ libraryCard }) => {
  const { photo, name, driscription } = libraryCard;
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div className="card border-0 library-card  p-3 mb-5  rounded">
        <img
          src={photo}
          className="card-img-top library-img img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title text-start mb-3 mt-3 library-title">
            {name}
          </h4>
          <p className="card-text text-start mb-3">{driscription}</p>
          <h6 className="card-text text-start mb-3 text-primary">
            Learn more <i class="fas fa-chevron-right"></i>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
