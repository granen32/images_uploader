import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
 ${normalize},
  html,
  body,
  #root,
  #root > * {
    height: 100%;
  }
  a {color: #000; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none; color:#fff; background-color:#f59000;}
`;
export default GlobalStyle;
