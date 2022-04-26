import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const HeaderArchivo = styled.header`
  margin: 120px 0px 50px;
  h1 {
    color: var(--lightest-slate);
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

const PaginaArchivo = () => {
  return (
    <Layout>
      <HeaderArchivo>
        <h1>archivo</h1>
        <p>una gran lista de cosas en las que he trabajado</p>
      </HeaderArchivo>
    </Layout>
  );
};

export default PaginaArchivo;
