import { css } from "styled-components";

const Variables = css`
  :root {
    --color-principal: #fe6187;
    --color-bg-principal: #202224;
    --color-bg-secundario: #292d3e;
    --color-fuente-secundario: #8892b0;
    --color-fuente-terciario: #a8b2d1;
    --color-fuente-principal: #ccd6f6;

    --fuente-mono: "SF Mono", monospace;
    --fuente-sans: "Montserrat", sans-serif;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export default Variables;
