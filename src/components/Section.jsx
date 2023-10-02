import React from "react";
import styled from "styled-components";
const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  .destino {
    position: absolute;
    top: -50px;
    visibility: 0;
    opacity: 0;
  }
`;

const Section = ({ id, children }) => {
  return (
    <Contenedor>
      <div className="destino" id={id}></div>
      {children}
    </Contenedor>
  );
};

export default Section;
