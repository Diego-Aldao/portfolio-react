import React from "react";
import styled from "styled-components";
import { animated } from "@react-spring/web";

const Curso = styled(animated.div)`
  background: var(--color-bg-secundario);
  padding: 20px;
  align-self: baseline;
  h3 {
    text-transform: capitalize;
    margin-bottom: 7px;
  }
  h4 {
    color: var(--color-principal);
    text-transform: capitalize;
    margin-bottom: 7px;
  }
  p {
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    color: var(--color-fuente-terciario);
    font-size: 14px;
  }
  ul {
    margin-top: 15px;
  }
  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.6;

    &:before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-principal);
    }
    p {
      font-size: 15px;
    }
    span {
      font-size: 14px;
    }
  }
  li:last-child {
    margin-bottom: 0px;
  }
  @media (min-width: 600px) {
    margin-left: 20px;
    width: calc(100% - 145px);
  }
`;

const Tecnologias = styled.li`
  display: flex;
  flex-wrap: wrap;
  span {
    color: var(--color-principal);
    padding: 0px 5px;
    text-transform: capitalize;
    font-family: var(--fuente-mono);
  }
`;

const ItemCurso = ({ curso, style }) => {
  return (
    <>
      {curso ? (
        <Curso style={style}>
          <h3>{curso.titulo}</h3>
          <h4>{curso.institucion}</h4>
          <p>{`${curso.fechaInicio} - ${curso.fechaFin}`}</p>
          <ul>
            <li>{curso.descripcion}</li>
            <Tecnologias>
              <p>tecnologías:</p>{" "}
              {curso.tecnologias.map((tecnologia) => {
                return <span key={tecnologia.id}> {tecnologia.nombre}</span>;
              })}
            </Tecnologias>
          </ul>
        </Curso>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemCurso;
