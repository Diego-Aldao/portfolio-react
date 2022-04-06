import { css } from "styled-components";

const Fonts = css`
  @font-face {
    font-family: "SF Mono", monospace;
    src: url("../fonts/SFMono/SFMonoLight.woff") format("woff");
    font-weight: 300;
  }
  @font-face {
    font-family: "SF Mono", monospace;
    src: url("../fonts/SFMono/SFMonoRegular.woff") format("woff");
    font-weight: 400;
  }
  @font-face {
    font-family: "SF Mono", monospace;
    src: url("../fonts/SFMono/SFMonoMedium.woff") format("woff");
    font-weight: 500;
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
