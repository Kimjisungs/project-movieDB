import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
    text-decoration:none;
    color: inherit;
  }
  * {
    box-sizing:border-box;
  }
  body{
    font-family: Georgia, "Times New Roman", serif;
    font-size: 12px;
    color: white;
    height: 100vh;
  }
`;

export default GlobalStyle;
