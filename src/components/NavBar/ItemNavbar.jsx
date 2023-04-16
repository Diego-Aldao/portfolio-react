import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Link = styled.li`
  padding: 10px 15px;
  a {
    font-family: var(--fuente-sans);
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
  a:hover {
    color: var(--color-principal);
  }
  @media (min-width: 1024px) {
    a {
      font-size: 14px;
    }
  }

  ${(props) => `
  &.${props.currentSection}{
    color: var(--color-principal);
    background: var(--color-bg-principal);
  }`}
`;

const LinkNavbar = ({ currentSection, clase }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLocation = (destino) => {
    if (location.pathname == "/archivo") {
      navigate(`${destino}`);
    }
  };
  return (
    <Link
      className={currentSection === clase ? clase : ""}
      onClick={() => {
        handleLocation(clase);
      }}
      currentSection={currentSection}
    >
      <a href={`#${clase}`}>{clase}</a>
    </Link>
  );
};

export default LinkNavbar;
