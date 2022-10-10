import styled from "styled-components";
import { Icon } from "@iconify/react";
import { animated } from "react-spring";

const Item = animated(styled.div`
  padding: 2rem 1.75rem;
  background-color: var(--light-navy);
  font-family: var(--fuente-sans);
  max-height: 325px;
  position: relative;
`);

const ContenidoItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  background-color: var(--light-navy);
  transition: var(--transition);
  &:hover {
    h3 {
      color: var(--color-principal);
    }
  }
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 35px;
  div {
    display: flex;
    svg {
      height: 22px;
      margin-right: 15px;
      transition: var(--transition);
    }
    svg:hover {
      color: var(--color-principal);
    }
    svg:last-of-type {
      margin: 0px;
    }
  }
`;
const ItemTitulo = styled.h3`
  color: var(--lightest-slate);
  font-size: 20px;
  line-height: 1.3;
  transition: var(--transition);
`;

const ItemDescripcion = styled.p`
  color: var(--light-slate);
  font-size: 14px;
`;

const ItemTecno = styled.ul`
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  li {
    margin-right: 15px;
    font-family: var(--fuente-mono);
    font-size: 13px;
    line-height: 1.75;
    text-transform: capitalize;
  }
`;

const Carpeta = styled(Icon)`
  color: var(--color-principal);
  height: 40px;
  width: 40px;
`;

const ItemArchivo = ({ data, style }) => {
  return (
    <Item style={data.id > 3 ? style : null}>
      <ContenidoItem>
        <ItemHead>
          <Carpeta icon="carbon:folder" inline={true} />
          <div>
            <Icon icon="charm:github" inline={true} />
            <Icon icon="mi:external-link" inline={true} />
          </div>
        </ItemHead>
        <ItemTitulo>{data.titulo}</ItemTitulo>
        <ItemDescripcion>{data.descripcion}</ItemDescripcion>
        <ItemTecno>
          {data.tecnologias.map((tecnologia) => {
            return <li>{tecnologia}</li>;
          })}
        </ItemTecno>
      </ContenidoItem>
    </Item>
  );
};

export default ItemArchivo;
