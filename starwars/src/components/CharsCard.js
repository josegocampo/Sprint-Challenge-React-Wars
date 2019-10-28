import React from "react";
import styled from "styled-components";


const Card = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin: 0 auto;
height: 200px;
width: 17vw;
border: 1px solid black;
border-radius: 5px;
margin: 10px;
margin-top: 100px;
background: black;
color: white;
&:hover{
    background: white;
    color: black;
}
`

const CharsCard = props => {
    return (
        <div className = "chars-list">
            <div className = 'cards'>
            <Card>
                <h3>Character: {props.name}</h3>
                <h4>Year of Birth: {props.birth}</h4>
                <h4>Stands at {props.height} cms tall</h4>

            </Card>
            </div>


        </div>
    );
};

export default CharsCard;