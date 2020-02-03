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
    font-family: Arial, Georgia, "Times New Roman", serif;
    background-color: #081c24;
    font-size: 16px;
    color: #222;
  }
`;

export default GlobalStyle;
