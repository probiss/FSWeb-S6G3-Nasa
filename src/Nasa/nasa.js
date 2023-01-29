import React from "react";
import styled from "styled-components";

const SCPage = styled.div`
background-color: #52796f;
border: 1px solid black
`
const SCPage1 = styled.h1`
font-family: 'Courier New', Courier, monospace;
border: 2px solid white ;
`
const SCdate = styled.div`
max-width:180px;
border: 2px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SCdateinput = styled.input`
background-color: #faedcd;
font-size:1.2rem;
width: 75%;
margin:.75rem;
`

const SCexp = styled.p`
background-color: #dad7cd ;
max-width:75%;
margin: 1rem auto;
border: 5px double black;
padding:1rem;
`
function Nasa(props) {
    const {apod,dateRandom,resetDate,history} = props;
    return (
        <SCPage>
            <SCPage1> {apod.title} </SCPage1>
            <img src={apod.url} alt={apod.title} />
            <SCexp> {apod.explanation} </SCexp>
            <SCdate className="date-content"> 
                <label htmlFor="dailypage"> Select Date: </label> 
                <SCdateinput 
                    type="date" 
                    id="dailypage" 
                    onChange={(event) => dateRandom(event.target.value)}
                    />
            </SCdate>
            <p><strong> From {apod.copyright} </strong></p>
        </SCPage>
    )
}

export default Nasa;