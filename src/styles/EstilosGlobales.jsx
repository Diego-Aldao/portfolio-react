import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Variables from "./Variables";

const EstilosGlobales = createGlobalStyle`
    ${Fonts};
    ${Variables};
`;

export default EstilosGlobales;
