import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100%;
    font-family: Zilla Slab;
  }


  body {
    padding: 0;
    margin: 0;
    background-color: #e9e9e9;
  }
`;

export default GlobalStyle;
