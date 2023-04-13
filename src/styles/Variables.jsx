import { css } from "styled-components";

const Variables = css`
  :root {
    --color-principal: #8035e5;
    --color-bg-principal: #e6e6e6;
    --color-bg-secundario: #dddddd;
    --color-fuente-principal: #001d28;
    --color-fuente-secundario: #555555;
    --color-fuente-terciario: #747474;
  }
  .dark-mode {
    --color-bg-principal: #001d28;
    --color-bg-secundario: #333333;
    --color-fuente-principal: #e6e6e6;
    --color-fuente-secundario: #cacaca;
    --color-fuente-terciario: #bdbdbd;
  }
  :root {
    --fuente-mono: "Azeret Mono", monospace;
    --fuente-sans: "Poppins", sans-serif;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
export default Variables;
