import React, {useState, useEffect} from 'react';
import CharsCard from "./CharsCard";
import axios from "axios";
import styled from "styled-components";


const Holder = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const Buttons = styled.button`
margin-top: 60px;
height: 80px;
width: 260px;
margin-right: 20px;
background: 
&:hover{
    background: red;
    color: black;
}
border: 2px solid black;
border-radius: 7px 7px 2px 2px;
box-shadow: 0 0 5px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 15px #ffed00f0, 0 0 25px blue;
`



export default function CharsList () {

    const [char, setChar] = useState ([]);
    const [num, setNum] = useState(1);

    console.log(num);


useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${num}`)
    .then(response => { 
        setChar(response.data.results);
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
    
    }, [num]);


    // function CharChanger () {

    // }

return (
    <div className="container">
         <div className = "btts">
             <Buttons onClick={()=> num > 1 ? setNum(num -1) : null } >Previous Page</Buttons>
             <Buttons onClick={()=> num < 9 ? setNum(num +1) : null } >Next Page</Buttons>
    
         </div>

      <Holder>
         
          {char.map(each  => {
          return <CharsCard 
          name ={each.name}  
          birth = {each.birth_year}
          height = {each.height}
          />; 

          })}

          </Holder>
  </div>    
);


}

