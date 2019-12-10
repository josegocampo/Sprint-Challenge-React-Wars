import React from "react";
import styled from "styled-components";
import logo2 from '../logo2.png';


const Navigator = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f7fb;
`;

const Navalogo = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 200px;

  }
  `;

  

const Log = styled.div`
width: 300px;
height: 50px;
}
`;

  
const NavaLinks = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 35%;
margin-right: 30px;

}
`;


const Nava = styled.div`
color: #55596d;
font-size: 14px;
line-height: 20px;
font-weight: 700;
letter-spacing: 0.3px;
text-transform: none;
justify-content: space-between;
  
  &:hover {
    background-color: fff;
    border-bottom: 2px solid #3dade2;
  }
`;

const Button = styled.form`
  width: 150px;
  background: #db74ff;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

 
 &:hover {
  background-color: fff;
  border-bottom: 1px solid white;
}
`;





const Nav = props => {
  return (
 

<Navigator>
 
 <Navalogo>
     
     <Nava> <Log></Log></Nava>
 </Navalogo>
    <NavaLinks>
        <a href='#'> <Nava>Home</Nava></a>
     
         <a href='#'><Nava>Planilla Arbitros </Nava></a>
         
     
        <a href='#'> <Nava>Reglamento</Nava></a>
   <a hre='#'> <Nava><Button>Arbitra Ahora!</Button></Nava></a>
    </NavaLinks>  
        

     </Navigator>
  );
};

export default Nav;
