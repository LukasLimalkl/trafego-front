import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

 body{
    background: rgb(248,251,255);
    background: linear-gradient(169deg, rgba(248,251,255,1) 0%, rgba(185,219,252,1) 100%);
    background-repeat:no-repeat;
    height: 100vh;
 }
  
`;
