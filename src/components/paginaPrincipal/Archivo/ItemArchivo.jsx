import styled from "styled-components";
import { Icon } from "@iconify/react";
import { animated } from "@react-spring/web";
import React from "react";
import { Link } from "react-router-dom";

const Item = styled(animated.div)`
  background-color: var(--color-bg-secundario);
  border-radius: 5px;
  font-family: var(--fuente-sans);
  position: relative;
  height: 350px;
  &:first-child {
    top: 0px !important;
    left: 0px !important;
    opacity: 1 !important;
  }
  @media (min-width: 565px) {
    &:nth-child(-n + 2) {
      top: 0px !important;
      left: 0px !important;
      opacity: 1 !important;
    }
  }
  @media (min-width: 900px) {
    &:nth-child(-n + 3) {
      top: 0px !important;
      left: 0px !important;
      opacity: 1 !important;
    }
  }
`;

const ContenidoItem = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
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
    position: relative;
    z-index: 2;
    display: flex;
    a {
      margin: 3px 5px 0px 0px;
      transition: var(--transition);
    }
    svg {
      height: 22px;
    }
    a:hover {
      color: var(--color-principal);
    }
    a:last-of-type {
      margin: 3px 0px 0px 0px;
    }
  }
`;
const ItemTitulo = styled.h3`
  color: var(--color-fuente-principal);
  font-size: 20px;
  line-height: 1.3;
  transition: var(--transition);
  text-transform: capitalize;
`;

const ItemDescripcion = styled.p`
  color: var(--color-fuente-terciario);
  font-size: 14px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  span {
    /*como el p tiene display webkit box, first-letter no funciona, por eso agrego este span */
    display: inline-block;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

const ItemTecno = styled.ul`
  display: flex;
  margin-top: 20px;
  flex-grow: 1;
  flex-wrap: wrap;
  align-content: flex-end;
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

const Especial = styled(Link)`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  bottom: 0px;
  content: "";
`;

const ItemArchivo = ({ data, style }) => {
  return (
    <Item style={style}>
      <ContenidoItem>
        <Especial to={data.links[0].url} target="_blank"></Especial>
        <ItemHead>
          <Carpeta icon="carbon:folder" />
          <div>
            {data.links.map((link) => {
              return (
                <React.Fragment key={link.id}>
                  {link.codigo ? (
                    <Link to={link.url} target="_blank">
                      <Icon icon="charm:github" inline={true} />
                    </Link>
                  ) : (
                    <Link to={link.url} target="_blank">
                      <Icon icon="mi:external-link" inline={true} />
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </ItemHead>
        <ItemTitulo>{data.titulo}</ItemTitulo>
        <ItemDescripcion>
          <span>{data.descripcion}</span>
        </ItemDescripcion>
        <ItemTecno>
          {data.tecnologias.map((tecnologia) => {
            return <li key={tecnologia.id}>{tecnologia.nombre}</li>;
          })}
        </ItemTecno>
      </ContenidoItem>
    </Item>
  );
};

export default ItemArchivo;
