import React from "react";
import styled from "styled-components";
import { useInView, animated } from "@react-spring/web";

const Contenedor = styled.header`
  margin-bottom: 40px;
  div {
    position: relative;
    overflow: hidden;
  }
  h2 {
    font-size: clamp(24px, 4vw, 38px);
    text-transform: capitalize;
    margin: 0px;
    position: relative;
    background: var(--color-bg-principal);
    display: inline-block;
    padding-right: 60px;
  }
  .descripcion-section {
    margin-top: 20px;
  }
`;

const Linea = styled(animated.span)`
  position: absolute;
  bottom: calc(50% - 3px);
  right: 0px;
  height: 2px;
  background: var(--color-fuente-principal);
  z-index: -1;
`;

const Header = ({ titulo, descripcion }) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        width: `${0}%`,
        opacity: 0.2,
      },
      to: {
        width: `${80}%`,
        opacity: 1,
      },
      config: { mass: 1, tension: 35, friction: 10 },
    }),
    {
      rootMargin: "-14% 0%",
    }
  );
  return (
    <Contenedor>
      <div>
        <h2>{titulo}</h2>
        <Linea ref={ref} style={springs}></Linea>
      </div>
      {descripcion && <p className="descripcion-section">{descripcion}</p>}
    </Contenedor>
  );
};

export default Header;
