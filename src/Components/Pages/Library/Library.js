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
      <div className="row gx-5 gy-2">
        <h2 className="text-start fw-ligh mb-5">Library</h2>
        {librarys.map((library) => (
          <LibraryCard libraryCard={library} key={library.id}></LibraryCard>
        ))}
      </div>
    </div>
  );
};

export default Library;
