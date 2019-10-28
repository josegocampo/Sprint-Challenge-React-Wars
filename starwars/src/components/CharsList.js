import React, {useState, useEffect} from 'react';
import CharsCard from "./CharsCard";
import axios from "axios";
import styled from "styled-components";


const Holder = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`




export default function CharsList () {

    const [char, setChar] = useState ([]);


useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response => { 
        setChar(response.data.results);
      
    })
    .catch(error => {
     console.log(`The error was: ${error}`) 
    })
    
    }, []);

    console.log(char);


return (
    <div className="container">
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

