import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  button{
    cursor: pointer;
    transition: .1s linear;
  }

  button:hover{
    opacity: .7;
  }

`;
