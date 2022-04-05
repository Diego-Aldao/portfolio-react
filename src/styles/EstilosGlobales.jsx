import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
    ${Fonts};
    ${Variables};

    html{
        width:100%;
        scroll-behavior: smooth;
    }
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
`;

export default EstilosGlobales;
