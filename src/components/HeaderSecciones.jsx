import React from "react";
import styled from "styled-components";

const Contenedor = styled.header`
  margin-bottom: 40px;
  span {
    margin-right: 5px;
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  h2 {
    font-size: clamp(24px, 4vw, 38px);
    text-transform: capitalize;
    margin: 0px;
    position: relative;
  }
  h2:after {
    content: "";
    position: absolute;
    right: 0px;
    top: calc(50% - 1px);
    width: 55%;
    height: 1px;
    background: var(--color-fuente-principal);
  }
  .descripcion-section {
    margin-top: 20px;
  }
  @media (min-width: 580px) {
    h2:after {
      width: 75%;
    }
  }
`;

const Header = ({ children }) => {
  return <Contenedor>{children}</Contenedor>;
};

export default Header;
