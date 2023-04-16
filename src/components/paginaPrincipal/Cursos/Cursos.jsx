import { useEffect, useState } from "react";
import styled from "styled-components";
import cursos from "../../../data/cursos.json";
import Header from "../../HeaderSecciones";
import { useSpring } from "@react-spring/web";
import ItemCurso from "./ItemCurso";
import { useInView } from "react-intersection-observer";
import Section from "../../Section";

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  min-height: 581px;
  @media (min-width: 450px) {
    min-height: 391px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
  @media (min-width: 700px) {
    min-height: 333px;
  }
  @media (min-width: 900px) {
    min-height: 262px;
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
  cursor: pointer;
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
  color: var(--color-fuente-principal);
  &::selection {
    color: var(--color-principal);
  }
  span {
    text-align: center;
    text-transform: capitalize;
    font-family: var(--fuente-mono);
    font-size: 14px;
    font-weight: 500;
    transition: var(--transition);
  }
  &.seleccionado {
    border-color: var(--color-principal);
    background: var(--color-bg-secundario);
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

const Cursos = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
  });
  const [listaCursos, setListaCursos] = useState(cursos);
  const [currentCurso, setCurrentCurso] = useState({});
  const [springs, api] = useSpring(() => ({
    from: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    config: { mass: 5, tension: 2000, friction: 100 },
  }));

  useEffect(() => {
    const primerCurso = listaCursos.cursos.filter((curso) => curso.id === 1)[0];
    setCurrentCurso(primerCurso);
  }, []);

  useEffect(() => {
    if (inView) setCurrentSection("cursos");
  }, [inView]);

  const handleClick = (curso) => {
    setCurrentCurso(curso);
    api.start({
      from: {
        x: 20,
        y: 20,
        opacity: 0,
      },
      to: {
        x: 0,
        y: 0,
        opacity: 1,
      },
    });
  };

  return (
    <Section id={"cursos"}>
      <Header titulo={cursos.nombre} descripcion={cursos.descripcion} />
      <Contenido ref={ref}>
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
        {currentCurso.id && <ItemCurso curso={currentCurso} style={springs} />}
      </Contenido>
    </Section>
  );
};

export default Cursos;
