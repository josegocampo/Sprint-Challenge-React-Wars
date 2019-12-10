import React, {useState} from "react";
import styled from "styled-components";


const RegForm = styled.form`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: 0 auto;
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

const Button = styled.form`
  width: 120px;
  background: dodgerblue;
  border-radius: 10px;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
 margin-left: 110px;
`;



const Labels = styled.form`
`;


const Forms = () => {
    const [user, setUser] = useState({ username: "", password: "" });
  
    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      console.log(user.username);
      console.log(user.password);
    };
  
    return (

      <RegForm>
        {console.log(user)}
        <form onSubmit={event => handleSubmit(event)}>
          <Labels>
            Username:
            <input
              type="text"
              name="username"
              onChange={event => handleChange(event)}
            />
          </Labels>
          <br/>
          <br/>
          <br/>
          <Labels>
            Password:
            <input
              type="text"
              name="password"
              onChange={event => handleChange(event)}
            />
          </Labels>
          <br/>
          <br/>
          <br/>
          <Button>Submit</Button>
        </form>
      </RegForm>
    );
  }
  
  export default Forms;