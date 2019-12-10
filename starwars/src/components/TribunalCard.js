import React from "react";
import styled from "styled-components";
import collab from '../collaboration.png'
import conflict from '../conflict.png'
import team from '../team.png'




const CardHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 82vh;
  background: #f6f7fb;
`;

const Card = styled.div`
  margin: 0 auto;
  text-align: center;
  border: 2px solid white;
  border-radius: 5px;
  width: 450px;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;
  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;



const TopCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Tittle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
  margin-right: 30px;
  font-weight: 700;
`;

const Image = styled.div`
width: 80px;
height: 80px;
`;


const Text = styled.div`
  padding: 30px;
`;


const Button = styled.form`
  width: 120px;
  background: #db74ff;
  border-radius: 10px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
 margin: 0 auto;
`;



const Middle = () => {

    return (



<CardHolder>
    

<Card>
    <TopCard><Tittle>Guarda los Guantes </Tittle><Image><img src={conflict} alt="Team Image" /></Image></TopCard>
    <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit pretium eros class vivamus quam, posuere laoreet blandit 
        maecenas egestas potenti ornare dictum integer praesent consequat dui sodales, lectus ridiculus himenaeos nullam 
        curae orci justo sem primis nulla congue.</Text>
    
 
    
    </Card>


<Card>
    <TopCard><Tittle>Invita a participar</Tittle><Image><img src={collab} alt="Team Image" /></Image></TopCard>
    <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit pretium eros class vivamus quam, posuere laoreet blandit 
        maecenas egestas potenti ornare dictum integer praesent consequat dui sodales, lectus ridiculus himenaeos nullam 
        curae orci justo sem primis nulla congue.</Text>
    
        <a href= '#'> <Button>Submit</Button></a>
    
    </Card>

    <Card>
    <TopCard><Tittle>Tribunal Arbital</Tittle><Image><img src={team} alt="Collab Image" /></Image></TopCard>
    <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit pretium eros class vivamus quam, posuere laoreet blandit 
        maecenas egestas potenti ornare dictum integer praesent consequat dui sodales, lectus ridiculus himenaeos nullam 
        curae orci justo sem primis nulla congue.</Text>
    
    
    </Card>
    
    
    


</CardHolder>



    );
}


export default Middle; 