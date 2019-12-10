import React from "react";
import styled from "styled-components";
import bottom from '../bottom2.jpg';
import checked from '../checked.png';



const Mid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  background: white;
  height: 92vh;
  align-items: center;
`;


const MidLeft = styled.div`
 display: flex;
 flex-direction: column;
 width: 45%;
 height: 75%;
 justify-content: center;
 
`;


const MidText = styled.div`
  font-size: 35px;
  line-height: 45px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #383651;
  text-align: left;
  width: 40%;
  margin: 0 auto;
  padding-left: 45px;
  padding-bottom: 35px;
`;


const MidChecks = styled.div`
 padding: 10px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 margin: 0 auto;
`;


const CheckTxt = styled.div`
 margin-left: 10px;
 font-weight: 600;
`;

const MidImg = styled.div`
  width: 45%;
  height: 60%;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background-image: url(${bottom});
  display: flex;
  background-size: cover;
`;



const Middle = ()=> {

  return (
     <Mid> 
       <MidLeft>
            <MidText>Procedimiento simple, rapido, probado por mas de 100 startups.
                </MidText>  
           
              <MidChecks> <img src={checked} className='check'/>     <CheckTxt>Razon 1 de porque deberias usarlo</CheckTxt></MidChecks>
              <MidChecks> <img src={checked} className='check'/>     <CheckTxt>Razon 2 de porque deberias usarlo</CheckTxt></MidChecks>
             <MidChecks>  <img src={checked} className='check'/>     <CheckTxt>Razon 3 de porque deberias usarlo</CheckTxt></MidChecks> 
             <MidChecks>  <img src={checked} className='check'/>     <CheckTxt>Razon 4 de porque deberias usarlo</CheckTxt></MidChecks> 
       </MidLeft>
     

        <MidImg/>
     </Mid>
  );
};

export default Middle;
