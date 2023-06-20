import React, { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router-dom";
import { createFileName, useScreenshot } from "use-react-screenshot";
import EditableElement from "./editableElement";

export const TeamScore = () => {
  const myContext = useContext(MyContext);
  const [choice, setChoice] = useState({});
  const navigate = useNavigate();
  console.log(myContext);

  const imageRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpg",
    quality: 1.0,
  });

  const download = (
    image,
    { name = "footballimage", extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  async function downloadScreenShot() {
    let imageData = await takeScreenshot(imageRef.current).then(download);
  }

  // json.strings saves data to a local storage (data is converted to a json string and back to an object when retrieving)
  // json.parse retrieves data from the local storage

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
      <img src="" alt="footballlogo" className="football-logo" />
      <div className="choosen-team" ref={imageRef}>
        <div onClick={selectHome}>
          <h1 className="head1">
            <span>H</span>ome
          </h1>
          <img
            src={choice?.teams?.home?.url || choice?.teams?.home?.flag}
            alt="flag"
            className="league-logo"
            ref={imageRef}
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
            ref={imageRef}
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
