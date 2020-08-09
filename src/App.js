import React, { useEffect, useState } from "react";
import Mount from "./Mount";
import "./App.css";

const App = () => {
  const [mounts, setMounts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getMounts = async () => {
      const response = await fetch(
        `https://ffxivcollect.com/api/mounts?name_en_cont=${query}`
      );
      const data = await response.json();
      setMounts(data.results);
      console.log(data.results);
    };

    getMounts();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1> Welcome to the FFXIV Mount Compendium! </h1>{" "}
      <p>
        {" "}
        This website lists every mount available in the MMO Final Fantasy XIV.
        You can also narrow your search...{" "}
      </p>{" "}
      <br />
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />{" "}
        <button className="search-button" type="submit">
          Search{" "}
        </button>{" "}
      </form>{" "}
      <br />
      <div className="mounts">
        {" "}
        {mounts.map((mount) => (
          <Mount
            key={mount.name}
            title={mount.name}
            image={mount.image}
            description={mount.enhanced_description}
            patch={mount.patch}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default App;
