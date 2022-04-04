import { css } from "styled-components";

const Fonts = css`
  @font-face {
    font-family: "Inconsolata", monospace;
    src: url("../fonts/Inconsolata/Inconsolata-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Inconsolata", monospace;
    src: url("../fonts/Inconsolata/Inconsolata-SemiBold.ttf") format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("../fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("../fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Montserrat", sans-serif;
    src: url("../fonts/Montserrat/Montserrat-SemiBold.ttf") format("truetype");
    font-weight: 600;
  }
`;

export default Fonts;
