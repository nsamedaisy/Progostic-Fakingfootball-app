import React, { useState, useContext } from "react";
import { MyContext } from "../MyContext";

function SearchBar() {
  const myContext = useContext(MyContext);
  const teams = myContext.data;
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    teams.countries.filter((country) => {
      return country.country.match(searchInput);
    });
  }

  if (searchInput.length > 0) {
    teams.clubs.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

export default SearchBar;
