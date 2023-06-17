import React from "react";

export const TeamScore = () => {
  return (
    <div className="choosen-team">
      <div>
        <h1 className="head1">
          <span>H</span>ome
        </h1>
        <img src="" alt="flag" className="league-logo" />
        <h2 className="league-name">Canada</h2>
      </div>

      <div>
        <p className="results">
          {" "}
          3 <span>vs</span> 2{" "}
        </p>
      </div>

      <div>
        <h1 className="head1">
          <span>A</span>way
        </h1>
        <img src="" alt="flag" className="league-logo" />
        <h2 className="league-name">Cameroon</h2>
      </div>
    </div>
  );
};
