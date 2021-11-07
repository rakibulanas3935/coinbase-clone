import React, { useEffect, useState } from "react";
import LibraryCard from "./LibraryCard";
import "./Library.css";
const Library = () => {
  const [librarys, setLibrarry] = useState([]);

  useEffect(() => {
    fetch("../../../../librery.json")
      .then((res) => res.json())
      .then((data) => setLibrarry(data));
  }, []);

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="container mt-5 mb-5">
        <div className="row gx-5 gy-2">
          <h2 className="text-start library mb-5">Library</h2>
          {librarys.map((library) => (
            <LibraryCard libraryCard={library} key={library.id}></LibraryCard>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Library;
