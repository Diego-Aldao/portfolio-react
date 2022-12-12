import { useEffect, useState } from "react";
import styled from "styled-components";
import cursos from "../data/cursos.json";
import curso from "../images/iconos/curso.png";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 700px;
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

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Lista = styled.div`
  display: flex;
  overflow: scroll;
  margin-bottom: 40px;
  @media (min-width: 600px) {
    flex-direction: column;
    width: 125px;
    overflow: unset;
    margin-bottom: 0px;
  }
`;

const Boton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 0px 15px;
  border: 0px;
  border-bottom: 2px solid var(--color-bg-secundario);
  height: 42px;
  background: none;
  transition: var(--transition);
  &::selection {
    color: var(--color-principal);
  }
  span {
    text-align: center;
    color: var(--color-fuente-secundario);
    text-transform: capitalize;
    font-family: var(--fuente-mono);
    font-size: 14px;
    font-weight: 600;
    transition: var(--transition);
  }
  &.seleccionado {
    border-color: var(--color-principal);
    span {
      color: var(--color-principal);
    }
  }
  &:hover {
    span {
      color: var(--color-principal);
    }
  }
  @media (min-width: 600px) {
    border-bottom: none;
    border-left: 2px solid var(--color-bg-secundario);
  }
`;

const Detalle = styled.div`
  h3 {
    text-transform: capitalize;
    margin-bottom: 5px;
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
    margin-top: 25px;
  }
  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    letter-spacing: 0.2px;
    line-height: 1.5;

    &:before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-principal);
    }
  }
  @media (min-width: 600px) {
    margin-left: 20px;
    width: calc(100% - 145px);
    padding: 10px 5px;
  }
`;

const Cursos = () => {
  const [listaCursos, setListaCursos] = useState(cursos);
  const [currentCurso, setCurrentCurso] = useState({});

  useEffect(() => {
    const primerCurso = listaCursos.cursos.filter((curso) => curso.id === 1)[0];
    setCurrentCurso(primerCurso);
  }, []);

  const handleClick = (curso) => {
    setCurrentCurso(curso);
  };

  return (
    <Contenedor>
      <Header>
        <h2>
          <span>
            <img src={curso} alt="" />
          </span>
          cursos
        </h2>
      </Header>
      <Contenido>
        <Lista>
          {listaCursos.cursos.map((curso) => {
            return (
              <Boton
                key={curso.id}
                onClick={() => handleClick(curso)}
                className={currentCurso.id === curso.id ? "seleccionado" : ""}
              >
                <span>{curso.institucion}</span>
              </Boton>
            );
          })}
        </Lista>
        <Detalle>
          {currentCurso.id ? (
            <>
              <h3>{currentCurso.titulo}</h3>
              <h4>{currentCurso.institucion}</h4>
              <p>{`${currentCurso.fechaInicio} - ${currentCurso.fechaFin}`}</p>
              <ul>
                <li>{currentCurso.descripcion}.</li>
                <li>{currentCurso.tecnologias}</li>
              </ul>
            </>
          ) : (
            <p>loading</p>
          )}
        </Detalle>
      </Contenido>
    </Contenedor>
  );
};

export default Cursos;
