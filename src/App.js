import React, {useState,useEffect} from "react";
import "./App.css";
import {dummyData} from "./dummyData";
import axios from "axios";
import Nasa from "./Nasa/nasa"


function App() {
  const [history,setHistory] = useState (dateFormatter(new Date()));
  const [apod,setApod] = useState("");
  useEffect (() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=Uw0ko9erPM1JKHPVRXNhcxzsMRoJWltEySbRbVlN&date=" + history)
    .then((response) => {
      setApod(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
},[history] )

  function dateRandom(history) {
    setHistory(dateFormatter(history));
  }

  function dateFormatter(history){
    let day = new Date(history);
    let realHistory = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()} `
    return realHistory;
  }
  
  return (
    <div className="App">
    <Nasa apod= {apod} dateRandom= {dateRandom} history={history}  />
    </div>
  );
}

export default App;
