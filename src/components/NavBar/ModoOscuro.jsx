import React, { useContext } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import DarkModeContext from "../../context/DarkModeContext";

const Switch = styled.li`
  width: 85px;
  display: flex;
  background: var(--color-bg-secundario);
  border-radius: 25px;
  position: relative;
  justify-content: space-between;
  padding: 7px;
  cursor: pointer;
  margin-left: 20px;

  svg {
    width: 25px;
    height: 25px;
  }
  .nav-contenedor-iconos {
    background: var(--color-fuente-principal);
    border-radius: 50%;
    position: absolute;
    top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--color-principal);
  }

  &.movil {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const SwitchDarkMode = styled(animated.div)`
  background: var(--color-fuente-principal);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 8px;
  border: 3px solid var(--color-principal);
`;

const ModoOscuro = ({ clase }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  let springs = useSpring({
    config: { mass: 1, tension: 1000, friction: 50 },
    left: darkMode ? "53px" : "7px",
  });

  const handleClick = () => {
    setDarkMode((darkMode) => !darkMode);
    document.documentElement.classList.toggle("dark-mode", !darkMode);
  };
  return (
    <Switch onClick={handleClick} className={clase}>
      <span>
        <Icon icon="ph:moon-stars" />
      </span>
      <span>
        <Icon icon="ph:sun" />
      </span>
      <SwitchDarkMode style={springs}></SwitchDarkMode>
    </Switch>
  );
};

export default ModoOscuro;
