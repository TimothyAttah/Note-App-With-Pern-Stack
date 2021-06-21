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
    --gray-3: #dedfec;
    --gray-4: #bdbec1;
    --white : white;
    --black: black;
    --light-blue: #377cff;
    --lighter-blue: #3ec6ff;
    --sky-blue: #356dfb;
    --darker-sky-blue: #073cc2;
    --dark-gray: #777;
    --crimson: crimson;
    --dark-purple: #3f51b5;
    --cream: #e5e5e5;
  };

  html {
    border: 2px solid red;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
  };

  a {
    text-decoration: none;
  };

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  };

  button {
    cursor: pointer;
    outline: none;
    border: none;
  };
  input {
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
