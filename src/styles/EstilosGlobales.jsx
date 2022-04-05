import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
  ${Fonts};
  ${Variables};

  body {
    background: var(--navy);
    font-family:var(--fuente-sans);
  }

  html {
    width:100%;
    scroll-behavior: smooth;
  }

  * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
   margin: 0 0 10px 0;
   font-weight: 600;
   color: var(--lightest-slate);
   line-height: 1.1;
  }

  h1, a {
    font-family: var(--fuente-mono);
  }
  
  img,
  svg {
   width: 100%;
   max-width: 100%;
   vertical-align: middle;
  }
  
  p {
   margin: 0 0 15px 0;
   &:last-child,
   &:last-of-type {
     margin: 0;
   }
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
    color:inherit;
  }
`;

export default EstilosGlobales;
