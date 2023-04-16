import React from "react";
import styled from "styled-components";

const Header = styled.header`
  margin: 120px 0px 50px;
  max-width: 1200px;
  margin: 120px auto 50px;
  h1 {
    color: var(--color-fuente-principal);
    font-size: clamp(36px, 7vw, 72px);
    text-transform: capitalize;
    font-family: var(--fuente-sans);
  }
  p {
    color: var(--color-principal);
    font-family: var(--fuente-mono);
    font-size: clamp(13px, 2vw, 16px);
    &::first-letter {
      text-transform: capitalize;
    }
  }
  @media (min-width: 480px) {
    margin-top: 150px;
  }
  @media (min-width: 768px) {
    margin-top: 200px;
  }
`;

const HeaderArchivo = () => {
  return (
    <Header>
      <h1>archivo</h1>
      <p>una gran lista de cosas en las que he trabajado</p>
    </Header>
  );
};

export default HeaderArchivo;
