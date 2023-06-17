import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";

export const SelectTeams = () => {
  const [clubTeam, setClubTeam] = useState();
  const [countryTeam, setCountryTeam] = useState();

  const myContext = useContext(MyContext);
  const teams = myContext.data;
  console.log(myContext.data);

  useEffect(() => {
    setClubTeam(teams.clubs);
    setCountryTeam(teams.countries);
  }, []);

  return (
    <div className="board">
      <container>
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
                    <img src={club.url} />
                    <h3>{club.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <label className="matchtype">Countries</label>
            <div className="select"></div>
          </div>
        </div>
      </container>
    </div>
  );
};
