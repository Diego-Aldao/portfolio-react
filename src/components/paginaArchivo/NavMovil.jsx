import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  padding: 5px 0px;
  background: var(--color-bg-secundario);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  a {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background: var(--color-bg-principal);
    border-radius: 25px;
    color: var(--color-principal);
    p {
      font-size: 14px;
      font-family: var(--fuente-sans);
      text-transform: capitalize;
    }
  }
  svg {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMovil = () => {
  return (
    <Nav>
      <Link to="/">
        <p>ir al inicio</p>
        <Icon icon="ph:house" />
      </Link>
    </Nav>
  );
};

export default NavMovil;
