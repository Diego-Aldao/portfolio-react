import React, { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";

const Item = styled(animated.div)`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  div {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 15px;
    max-width: 120px;
    svg {
      width: 25px;
      height: 25px;
    }
    p {
      display: none;
      font-size: 12px;
      text-transform: uppercase;
      padding: 2px 0px 0px 5px;
    }
  }
  ${(props) => `
  .${props.clase}{
    color: var(--color-principal);
    background: var(--color-bg-principal);
    p {
      display: block;
    }
  }`}
`;

const ItemNavMovil = ({ currentSection, clase, icono }) => {
  const [springs, api] = useSpring(() => ({
    from: { width: "30px" },
    config: { mass: 1, tension: 4005, friction: 100 },
  }));
  useEffect(() => {
    if (currentSection === clase) {
      api.start({
        width: "110px",
      });
    } else {
      api.start({
        width: "30px",
      });
    }
  }, [currentSection]);

  return (
    <Item
      style={springs}
      clase={clase}
      onClick={(e) => {
        e.preventDefault();
        window.location.replace(`/#${clase}`);
      }}
    >
      <div className={currentSection == clase ? clase : ""}>
        {icono}
        <p>{clase}</p>
      </div>
    </Item>
  );
};

export default ItemNavMovil;
