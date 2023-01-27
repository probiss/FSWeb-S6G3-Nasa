import React from "react";

function Nasa(props) {
    const {apod,dateRandom} = props;
    return (
        <>
            <h1> {apod.title} </h1>
            <p> {apod.explanation} </p>
            <img src={apod.url} alt={apod.title} />
            <div className="date-content">
                <button onClick={() => dateRandom(-1)} > azalt </button>
                <p>{apod.date}</p>
                <button onClick={() => dateRandom(1)} > arttır </button>
            </div>
            <p> {apod.copyright} </p>
        </>
    )
}

export default Nasa;