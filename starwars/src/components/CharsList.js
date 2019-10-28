import React, {useState, useEffect} from 'react';
import CharsCard from "./CharsCard";
import axios from "axios";
import styled from "styled-components";
import Logo from "./sw.png"


const Holder = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

const BttSW = styled.div`
display:flex; 
justify-content: center;
margin-top: 60px;
`

const Buttons = styled.button`

height: 80px;
width: 260px;
background: black;
color: red;
border: 2px solid black;
box-shadow: 0 0 5px #fff, 0 0 8px #fff, 0 0 12px #fff, 0 0 15px #ffed00f0, 0 0 25px blue;
border-radius: 30px;
font-weight: 600;
font-size: 1.8rem;
`
const SW = styled.img`
height: 80px;
margin-left: 5px;
margin-right: 5px;
border-radius: 30px;
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
         <BttSW>
             <Buttons onClick={()=> num > 1 ? setNum(num -1) : null } >Previous Page</Buttons>
             <SW src = {Logo}  alt='swlogo'/>
             <Buttons onClick={()=> num < 9 ? setNum(num +1) : null } >Next Page</Buttons>
    
         </BttSW>

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

