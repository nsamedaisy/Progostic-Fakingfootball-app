import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../MyContext";
import data from "../data.json";

export const SelectTeams = () => {
  // const [searchInput, setSearchInput] = useState("");
  const [teams, setTeams] = useState(data);
  const [clubTeam, setClubTeam] = useState([]);
  const [countryTeam, setCountryTeam] = useState([]);
  const navigate = useNavigate();

  // const teams = myContext.data;
  // const [fetchedData, setFetchedData] = useState(teams);

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

  // const handleFilter = (e) => {
  //   const filterResult = teams.filter(
  //     (data) =>
  //       data.clubs.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       data.countries.country.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setFetchedData(filterResult);
  //   setSearchInput(e.target.value);
  // };

  return (
    <div className="board">
      <div>
        <h1 className="heading-1">
          Progostic <span> Football</span> LiveScore Match
        </h1>

        <div className="row">
          <div>
            <label>Clubs</label>

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

          {/* <input
            type="search"
            id="search"
            placeholder="Search here"
            value={searchInput}
            onInput={(e) => handleFilter(e)}
          />
          <button type="search" className="button-search">
            search
          </button> */}

          {/* <SearchBar /> */}

          <div className="country-label">
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
