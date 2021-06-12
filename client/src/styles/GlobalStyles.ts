import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --light-blue: #377cff;
    --lighter-blue: #3ec6ff;
  }

  html {
    border: 2px solid red;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyles;