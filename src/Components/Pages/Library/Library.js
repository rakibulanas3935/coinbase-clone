import React, { useEffect, useState } from "react";
import LibraryCard from "./LibraryCard";

const Library = () => {
  const [librarys, setLibrarry] = useState([]);

  useEffect(() => {
    fetch("../../../../librery.json")
      .then((res) => res.json())
      .then((data) => setLibrarry(data));
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <h2 className="text-start fw-ligh mb-4">Library</h2>
        {librarys.map((library) => (
          <LibraryCard libraryCard={library} key={library.id}></LibraryCard>
        ))}
      </div>
    </div>
  );
};

export default Library;
