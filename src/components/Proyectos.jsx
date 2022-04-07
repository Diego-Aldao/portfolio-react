import styled from "styled-components";
import Proyecto from "./Proyecto";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;
const HeaderNumerado = styled.header`
  margin-bottom: 40px;
  span {
    font-family: var(--fuente-mono);
    margin-right: 5px;
    font-weight: 100;
    color: var(--color-principal);
    font-size: 20px;
  }
  h2 {
    font-size: clamp(20px, 4vw, 26px);
    text-transform: capitalize;
    margin: 0px;
  }
`;
const Contenido = styled.ul``;

const Proyectos = () => {
  return (
    <Contenedor>
      <HeaderNumerado>
        <h2>
          <span>03.</span>proyectos
        </h2>
      </HeaderNumerado>
      <Contenido>
        <Proyecto textend />
        <Proyecto imgend />
        <Proyecto textend />
      </Contenido>
    </Contenedor>
  );
};

export default Proyectos;
