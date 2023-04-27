import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ImagenProyecto = styled.div`
  width: 100%;
  max-height: 350px;
  position: relative;
  @media (min-width: 768px) {
    grid-row: -1;
    grid-column: ${({ imagen }) => (imagen ? "6 / 13" : "1 / 8")};
  }
  @media (min-width: 1024px) {
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: var(--color-principal);
      mix-blend-mode: multiply;
      transition: var(--transition);
    }
    img {
      filter: grayscale(100%);
    }
  }
`;

const LinksProyecto = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  a {
    display: inline-block;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: capitalize;
    position: relative;
    z-index: 3;
    svg {
      width: 15px;
      margin-left: 5px;
    }
  }
  a:after {
    content: "";
    position: absolute;

    ${({ imagen }) =>
      imagen
        ? css`
            left: 0px;
          `
        : css`
            right: 0px;
          `};
    bottom: -2px;
    width: 0px;
    height: 1px;
    background: var(--color-fuente-principal);
    transition: var(--transition);
  }
  a:first-child {
    margin-right: 15px;
  }

  a:hover {
    color: var(--color-principal);
  }
  @media (min-width: 768px) {
    justify-content: ${({ imagen }) => (imagen ? "flex-start" : "flex-end")};
  }
`;
const DescripcionProyecto = styled.div`
  background: var(--color-bg-principal);
  margin-bottom: 10px;
  p {
    font-size: 14px;
    font-family: var(--fuente-sans);
  }
  p:first-letter {
    text-transform: capitalize;
  }
  @media (min-width: 768px) {
    margin-bottom: 0px;
    padding: ${({ imagen }) =>
      imagen ? "10px 5px 10px 0px" : "10px 0px 10px 5px"};
  }
`;

const ListaTecnologias = styled.ul`
  background: var(--color-bg-principal);
  padding: 0px 0px 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  li {
    padding: 0px 15px 5px 0px;
    color: var(--color-fuente-principal);
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    justify-content: ${({ imagen }) => (imagen ? "flex-start" : "flex-end")};
    li {
      padding: ${({ imagen }) =>
        imagen ? "0px 15px 5px 0px" : " 0px 0px 5px 15px"};
    }
  }
`;

const Item = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 30px;
  grid-template-columns: 1fr;
  max-width: 550px;
  margin: 0 auto 50px;
  position: relative;
  p,
  h3 {
    font-family: var(--fuente-sans);
  } //como el padre es un anchor, y los anchors tienen fuente mono, en este caso tengo que sobreescribir la fuente
  @media (min-width: 768px) {
    min-height: 280px;
    max-width: 100%;
    grid-template-columns: repeat(12, 1fr);
    padding: ${({ imagen }) =>
      imagen ? "0px 0px 0px 15px" : "0px 15px 0px 0px"};
  }
  @media (min-width: 1024px) {
    min-height: 320px;
  }
  &:hover ${ImagenProyecto} {
    //cambia los estilos de otro styled components en hover, y dicho componente tiene que estar declarado antes que este
    img {
      filter: brightness(100%);
    }
    &:after {
      background: none;
    }
  }
  &:hover ${LinksProyecto} {
    a:after {
      width: 100%;
    }
  }
  &:hover ${DescripcionProyecto}, &:hover ${ListaTecnologias}, &:hover {
    background: var(--color-bg-secundario);
  }
`;

const ContenidoProyecto = styled.div`
  padding: 15px 0px;
  position: relative;
  h3 {
    text-transform: capitalize;
    font-size: clamp(22px, 4vw, 26px);
    margin-bottom: 10px;
  }
  .subtitulo {
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    font-size: 13px;
    margin-bottom: 10px;
    color: var(--color-principal);
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: -1;
    grid-column: ${({ imagen }) => (imagen ? "1 / 9" : "5 / 13")};
    text-align: ${({ imagen }) => (imagen ? "start" : "end")};
    padding: 0px;
    .subtitulo {
      margin-bottom: 0px;
    }
  }
  @media (min-width: 1080px) {
    grid-column: ${({ imagen }) => (imagen ? "1 / 8" : "6 / 13")};
  }
`;

const Especial = styled(Link)`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  bottom: 0px;
  content: "";
  z-index: 2;
`;

const Proyecto = ({ data }) => {
  const {
    titulo,
    tipo,
    descripcion,
    tecnologias,
    links,
    imagenUrl,
    imagenEnd,
  } = data;
  return (
    <Item imagen={imagenEnd}>
      <Especial to={links[0].url} target="_blank" />
      <ImagenProyecto imagen={imagenEnd}>
        <img src={imagenUrl} alt="" />
      </ImagenProyecto>
      <ContenidoProyecto imagen={imagenEnd}>
        <h3>{titulo}</h3>
        <p className="subtitulo">{tipo}</p>
        <DescripcionProyecto imagen={imagenEnd}>
          <p>{descripcion}</p>
        </DescripcionProyecto>
        <ListaTecnologias imagen={imagenEnd}>
          {tecnologias.map((tecnologia) => {
            return <li key={tecnologia.id}>{tecnologia.nombre}</li>;
          })}
        </ListaTecnologias>
        <LinksProyecto imagen={imagenEnd}>
          {links.map((link) => {
            return (
              <React.Fragment key={link.id}>
                {link.codigo ? (
                  <a href={`${link.url}`} target="_blank">
                    <span>ver código</span>
                    <Icon icon="charm:github" inline={true} />
                  </a>
                ) : (
                  <a href={link.url} target="_blank">
                    <span>ver sitio</span>
                    <Icon icon="mi:external-link" inline={true} />
                  </a>
                )}
              </React.Fragment>
            );
          })}
        </LinksProyecto>
      </ContenidoProyecto>
    </Item>
  );
};

export default Proyecto;
