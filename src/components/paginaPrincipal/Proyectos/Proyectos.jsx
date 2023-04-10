import styled from "styled-components";
import Proyecto from "./Proyecto";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;
const Header = styled.header`
  margin-bottom: 40px;
  span {
    margin-right: 5px;
    color: var(--color-principal);
    width: 50px;
    height: 50px;
    display: inline-block;
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
      <Header>
        <h2>proyectos</h2>
      </Header>
      <Contenido>
        <Proyecto textend />
        <Proyecto imgend />
        <Proyecto textend />
      </Contenido>
    </Contenedor>
  );
};

export default Proyectos;
