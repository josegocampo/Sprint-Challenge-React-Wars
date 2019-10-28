import React from "react";
import styled from "styled-components";


const Card = styled.div`
margin: 0 auto;
height: 200px;
width: 300px;
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
                <h4>name: {props.name}</h4>
                <h4>year of birth: {props.birth}</h4>
                <h4>height: {props.height}</h4>

            </Card>
            </div>


        </div>
    );
};

export default CharsCard;