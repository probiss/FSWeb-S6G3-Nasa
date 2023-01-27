import React, {useState,useEffect} from "react";
import "./App.css";
import {dummyData} from "./dummyData";
import axios from "axios";
import Nasa from "./Nasa/nasa"


function App() {
  const [history,setHistory] = useState ("2023-01-27");
  const [apod,setApod] = useState(dummyData);
  useEffect (() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + history)
    .then((response) => {
      setApod(response.data);
    } )
  },[history] )


  function dateRandom(days){
    let day = new Date(history);
    day.setDate(day.getDate()+ days);
    let realHistory = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()} `
    setHistory(realHistory);
  }
  return (
    <div className="App">
    <Nasa apod= {apod} dateRandom= {dateRandom} />
    </div>
  );
}

export default App;
