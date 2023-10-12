import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import ItemNavMovil from "./ItemNavMovil";

const Navegacion = styled.nav`
  width: 100%;
  height: 50px;
  background: var(--color-bg-secundario);
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  padding: 0px 15px;
  align-items: center;
  justify-content: center;
  z-index: 9;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavBarMobile = ({ currentSection }) => {
  useEffect(() => {}, [currentSection]);

  return (
    <Navegacion currentSection={currentSection}>
      <ItemNavMovil
        currentSection={currentSection}
        clase={"inicio"}
        icono={<Icon icon="ph:house" />}
      />
      <ItemNavMovil
        currentSection={currentSection}
        clase={"proyectos"}
        icono={<Icon icon="ph:folder-simple" />}
      />
      <ItemNavMovil
        currentSection={currentSection}
        clase={"about"}
        icono={<Icon icon="ph:user-circle" />}
      />
      <ItemNavMovil
        currentSection={currentSection}
        clase={"cursos"}
        icono={<Icon icon="ph:graduation-cap" />}
      />
      <ItemNavMovil
        currentSection={currentSection}
        clase={"contacto"}
        icono={<Icon icon="codicon:mail" />}
      />
    </Navegacion>
  );
};

export default NavBarMobile;
