import Proyecto from "./Proyecto";
import Header from "../../HeaderSecciones";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import Section from "../../Section";
import Proyects from "../../../data/proyectos.json";

const Proyectos = ({ setCurrentSection }) => {
  const [proyectosPrincipales, setProyectosPrincipales] = useState();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) setCurrentSection("proyectos");
  }, [inView]);

  useEffect(() => {
    const proyectosFiltrados = Proyects.data.filter(
      (proyecto) => proyecto.principal === true
    );
    let { nombre, descripcion } = Proyects;
    const finalData = { nombre, descripcion, proyectosFiltrados };
    setProyectosPrincipales(finalData);
  }, []);

  return (
    <Section id={"proyectos"}>
      <Header
        titulo={proyectosPrincipales?.nombre}
        descripcion={proyectosPrincipales?.descripcion}
      />
      <ul ref={ref}>
        {proyectosPrincipales?.proyectosFiltrados?.map((proyecto) => {
          return (
            <React.Fragment key={proyecto.id}>
              <Proyecto data={proyecto} />
            </React.Fragment>
          );
        })}
      </ul>
    </Section>
  );
};

export default Proyectos;
