import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100%;
    font-family: Zilla Slab;
  }


  body {
    transition: background, color, background-color 0.5s;
    padding: 0;
    margin: 0;
    ${({ theme }) => css`
      background-color: ${theme.backgroundColor};
      color: ${theme.typography.primaryText};
    `}

    #nprogress{
      z-index: 9999;
    }
  }
`;

export default GlobalStyle;
