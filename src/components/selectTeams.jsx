import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import { SearchBar } from "../components/SearchBar";

export const SelectTeams = () => {
  const [clubTeam, setClubTeam] = useState([]);
  const [countryTeam, setCountryTeam] = useState([]);
  const navigate = useNavigate();

  const myContext = useContext(MyContext);
  const teams = myContext.data;
  console.log(myContext.data);

  useEffect(() => {
    setClubTeam(teams?.clubs);
    setCountryTeam(teams?.countries);
  }, [teams]);

  // This function called selectTeams takes a club parameter. It retrieves the object stored in the browser's sessionStorage and parses it as JSON into a variable called select.

  const selectTeams = (club) => {
    const select = JSON.parse(sessionStorage.getItem("select"));

    if (select.choice === "home") {
      select.teams.home = club;
      sessionStorage.setItem("select", JSON.stringify(select));
    }

    if (select.choice === "away") {
      select.teams.away = club;
      sessionStorage.setItem("select", JSON.stringify(select));
    }

    navigate("/");
  };

  // const [searchInput, setSearchInput] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //   teams.countries.filter((country) => {
  //     return country.country.match(searchInput);
  //   });
  // }

  // if (searchInput.length > 0) {
  //   teams.clubs.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }

  return (
    <div className="board">
      <div>
        <h1 className="heading-1">
          Progostic <span> Football</span> LiveScore Match
        </h1>

        <div className="row">
          <div>
            <label>Clubs</label>

            {/* <input
              type="search"
              placeholder="Search here"
              onChange={handleChange}
              value={searchInput}
            /> */}
            {/* <SearchBar /> */}
            <div className="select">
              {clubTeam?.map((club, i) => {
                return (
                  <div
                    key={club.name + i}
                    onClick={() => selectTeams(club)}
                    className="flex-list"
                  >
                    <img src={club.url} alt="logo" className="flags" />
                    <h3>{club.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label>Countries</label>

            <div className="select">
              {countryTeam?.map((country, i) => {
                return (
                  <div
                    key={country.name + i}
                    onClick={() => selectTeams(country)}
                    className="flex-list"
                  >
                    <img src={country.flag} alt="flags" className="flags" />
                    <h3>{country.country}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
