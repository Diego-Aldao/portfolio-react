import React from "react";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const Main = styled.main`
  width: 100%;
  min-height: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: clamp(100px, 25vw, 180px);
    color: var(--color-principal);
  }
  h2 {
    font-size: clamp(26px, 5vw, 42px);
    text-transform: capitalize;
    text-align: center;
    font-weight: 400;
  }
`;
const MiLink = styled(Link)`
  padding: 15px 20px;
  border: 1px solid var(--color-principal);
  color: var(--color-principal);
  margin-top: 30px;
  text-transform: capitalize;
`;

const Pagina404 = () => {
  return (
    <Layout>
      <Main>
        <h1>404</h1>
        <h2>pagina no encontrada</h2>
        <MiLink to="/">ir al inicio</MiLink>
      </Main>
    </Layout>
  );
};

export default Pagina404;
