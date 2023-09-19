import { useState, useEffect } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Routes, Route } from "react-router-dom";
import { TeamScore } from "./components/TeamScore";
import { SelectTeams } from "./components/selectTeams";

function App() {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application.json",
        Accept: "application.json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (info) {
        setData(info);
        return info;
      });
  };
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <MyContext.Provider value={{ data }}>
      <Routes>
        <Route path="/" element={ <TeamScore/> } />
        <Route path="selectteams" element={ <SelectTeams/> } />
      </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
