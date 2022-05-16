import { css } from "styled-components";

const Variables = css`
  :root {
    --color-principal: #ff848e;
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: #020c1bb3;
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;

    --fuente-mono: "SF Mono", monospace;
    --fuente-sans: "Montserrat", sans-serif;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export default Variables;
