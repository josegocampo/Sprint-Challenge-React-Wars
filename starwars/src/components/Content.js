import React from "react";
import styled from "styled-components";
import header from '../header.jpg'
import logo2 from '../logo2.png'




const Header = styled.div`
    background-image: url(${header});
    width: 100%;
    height: 79vh;
    display: flex;
    background-size: cover;
    background-position: 70% 60%;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    color: #55596d;
    text-align: center;
    margin: 0 auto;
`


const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 40%;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-bottom: 0px;
    margin-left: 100px;
    margin-bottom: 80px;
    color: white;
    font-size: 50px;
    line-height: 56px;
    font-weight: 700;
    text-align: left;
    letter-spacing: -0.5px;  
    
`


const HeaderTxt = styled.div`
    display: flex;

`

const SmallText = styled.div`
    margin-top: 20px;
    font-size: 19px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 160px;
`


const Contenido = () => {
    
  
    return (
      <div className="Ctt">
     <Header>
    
         
<HeaderContent>
             <HeaderTxt>Tribunal Arbitral Digital </HeaderTxt>
            
             <SmallText>

               Lorem ipsum dolor sit amet consectetur adipiscing elit pretium eros class vivamus quam, posuere laoreet blandit 
        maecenas egestas potenti.
                  </SmallText>
</HeaderContent>
         
         </Header>
        
      </div>
    );
  }



  export default Contenido;
