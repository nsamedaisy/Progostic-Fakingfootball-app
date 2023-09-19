import React, { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import EditableElement from "./editableElement";
import domtoimage from "dom-to-image";

export const TeamScore = () => {
  const myContext = useContext(MyContext);
  const [choice, setChoice] = useState({});
  const navigate = useNavigate();
  console.log(myContext);

  // screenshot implementation

  const createFileName = (extension, name) => {
    const date = new Date();
    const timestamp = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    return `${name}_${timestamp}.${extension}`;
  };

  const imageRef = useRef(null);

  const download = (
    image,
    { name = "footballimage", extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenShot = (event) => {
    console.log("Clicked capture button");
    event.preventDefault();
    event.stopPropagation();
    const node = imageRef.current;
    setTimeout(() => {
      domtoimage.toJpeg(node).then(function (dataUrl) {
        download(dataUrl, { name: "team_score", extension: "jpg" });
      });
    }, 1000);
  };

  const selectHome = () => {
    const newPlay = JSON.parse(sessionStorage.getItem("select"));

    let select = {
      choice: "home",
      teams: { away: {}, home: {} },
    };

    if (newPlay) {
      select = { ...newPlay, choice: "home" };
    }

    sessionStorage.setItem("select", JSON.stringify(select));
    navigate("/selectteams");
  };

  const selectAway = () => {
    const newPlay = JSON.parse(sessionStorage.getItem("select"));

    let select = {
      choice: "away",
      teams: { away: {}, home: {} },
    };

    if (newPlay) {
      select = { ...newPlay, choice: "away" };
    }

    sessionStorage.setItem("select", JSON.stringify(select));
    navigate("/selectteams");
  };

  useEffect(() => {
    const select = JSON.parse(sessionStorage.getItem("select"));
    setChoice(select);
  }, []);

  return (
    <div>
      <h2 className="teamscoreText">
        On your board you have Home and Away click on it and select the teams
        you want it can be Clubs or Countries
      </h2>
      <div className="choosen-team" ref={imageRef}>
        <div onClick={selectHome}>
          <h1 className="head1">
            <span>H</span>ome
          </h1>
          <img
            src={choice?.teams?.home?.url || choice?.teams?.home?.flag}
            alt="flag"
            className="league-logo"
          />
          <h2 className="league-name">
            {choice?.teams?.home?.name || choice?.teams?.home?.country}
          </h2>
        </div>

        <div className="editable">
          <EditableElement>
            <input className="results" placeholder="00" type="number" />
          </EditableElement>
          <span className="vs">vs</span>
          <EditableElement>
            <input className="results" placeholder="00" type="number" />
          </EditableElement>{" "}
        </div>

        <div onClick={selectAway}>
          <h1 className="head1">
            <span>A</span>way
          </h1>
          <img
            src={choice?.teams?.away?.url || choice?.teams?.away?.flag}
            alt="flag"
            className="league-logo"
          />
          <h2 className="league-name">
            {choice?.teams?.away?.name || choice?.teams?.away?.country}
          </h2>
        </div>
      </div>

      <button className="capture" onClick={downloadScreenShot}>
        Capture
      </button>
    </div>
  );
};
