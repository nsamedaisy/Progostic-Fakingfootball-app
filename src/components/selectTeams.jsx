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
          Progostic Football <span>LiveScore</span> match
        </h1>

        <div className="row">
          <div>
            <label className="matchtype">Clubs</label>
            <div className="select">
              {clubTeam?.map((club, i) => {
                return (
                  <div key={club.name + i}>
                    <img src={club.url} alt="logo" />
                    <h3>{club.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label className="matchtype">Countries</label>
            <div className="select">
              {countryTeam?.map((country, i) => {
                return (
                  <div key={country.name + i}>
                    <img src={country.flag} alt="flags" />
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
