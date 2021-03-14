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
  }

  #nprogress .bar {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    z-index: 99;
  }
`;

export default GlobalStyle;
