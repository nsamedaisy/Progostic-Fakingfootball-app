import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";

export const SelectTeams = () => {
  const [clubTeam, setClubTeam] = useState([]);
  const [countryTeam, setCountryTeam] = useState([]);

  const myContext = useContext(MyContext);
  const teams = myContext.data;
  console.log(myContext.data);

  useEffect(() => {
    setClubTeam(teams?.clubs);
    setCountryTeam(teams?.countries);
  }, [teams]);

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
                  <div key={club.name + i} className="flex-list">
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
                  <div key={country.name + i} className="flex-list">
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
