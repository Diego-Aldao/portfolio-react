import styled from "styled-components";
import ItemArchivo from "./ItemArchivo";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;
const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
  span {
    font-family: var(--fuente-mono);
    font-weight: 100;
    color: var(--color-principal);
    font-size: 14px;
  }
  h2 {
    font-size: clamp(18px, 3vw, 26px);
    text-transform: capitalize;
  }
`;

const ListaArchivo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

const Archivo = () => {
  return (
    <Contenedor>
      <Header>
        <h2>lista de proyectos</h2>
        <span>ver todos</span>
      </Header>
      <ListaArchivo>
        <ItemArchivo />
        <ItemArchivo />
        <ItemArchivo />
        <ItemArchivo />
      </ListaArchivo>
    </Contenedor>
  );
};

export default Archivo;
