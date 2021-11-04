import React from "react";
import "./Library.css";
const LibraryCard = ({ libraryCard }) => {
  const { photo, name, driscription } = libraryCard;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card border-0 library-card shadow-sm p-3 mb-5  rounded">
        <img src={photo} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-start">{name}</h5>
          <p className="card-text text-start">{driscription}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
