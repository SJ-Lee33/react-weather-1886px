import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Weather from "./weather/Weather";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    // App or App cold
    <Wrapper className="App">
      <GlobalStyle />
      <Weather />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: burlywood;
  border: 10px solid black;
`;

// .App {
//   background-color: burlywood;
// }

// .App.cold {
//   background-color: skyblue;
// }
