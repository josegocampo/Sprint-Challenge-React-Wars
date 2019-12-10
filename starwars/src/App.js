import React from 'react';
import './App.css';
import Cards from './components/TribunalCard';
import Content from './components/Content';
import Footer from './components/Footer'
import BottomContent from './components/BottomContent'
import { createGlobalStyle } from "styled-components";
import Nav from './components/Nav';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  body {
    font-family: 'Lato', sans-serif;
  }
`


const App = () => {


return (
  <div className="App">
  <GlobalStyles/>
  <Nav/>
  <Content/>
  <Cards/>
  <BottomContent/>
  <Footer/>
  
  </div>
);
}

export default App;
