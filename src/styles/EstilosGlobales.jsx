import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
  ${Variables};

  body {
    background: var(--color-bg-principal);
    font-family:var(--fuente-sans);
    color: var(--color-fuente-secundario);
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
  *::selection{
    color: var(--color-principal);
    background: var(--color-fuente-principal);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
   margin: 0 0 10px 0;
   font-weight: 600;
   color: var(--color-fuente-principal);
   line-height: 1.1;
  }
  h1,h2,h3,h4,h5,h6,p,span,a{
    letter-spacing: 0.4px;
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

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  p {
   margin: 0 0 15px 0;
   line-height: 1.5;
   font-size: clamp(16px, 2vw, 18px);
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
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    display: inline-block;
    transition: var(--transition);
  }
`;

export default EstilosGlobales;
