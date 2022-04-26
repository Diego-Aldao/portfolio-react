import styled from "styled-components";
import ItemArchivo from "./ItemArchivo";
import { Link } from "react-router-dom";

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

const Boton = styled.button`
  color: var(--color-principal);
  border: 1px solid var(--color-principal);
  border-radius: 4px;
  font-size: 15px;
  font-family: var(--fuente-mono);
  line-height: 1;
  cursor: pointer;
  padding: 1.25rem 1.75rem;
  margin: 80px auto 0px;
  display: block;
  background: #0000;
  text-transform: capitalize;
`;

const Archivo = () => {
  return (
    <Contenedor>
      <Header>
        <h2>lista de proyectos</h2>
        <Link to="/archivo">ver mas</Link>
      </Header>
      <ListaArchivo>
        <ItemArchivo />
        <ItemArchivo />
        <ItemArchivo />
        <ItemArchivo />
      </ListaArchivo>
      <Boton>ver mas</Boton>
    </Contenedor>
  );
};

export default Archivo;
