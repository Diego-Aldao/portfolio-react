import React, { useState, Suspense, lazy, useEffect } from "react";
import About from "../components/paginaPrincipal/About/About";
import Header from "../components/paginaPrincipal/Header/Header";
const Cursos = lazy(() =>
  import("../components/paginaPrincipal/Cursos/Cursos")
);
const Proyectos = lazy(() =>
  import("../components/paginaPrincipal/Proyectos/Proyectos")
);
const Archivo = lazy(() =>
  import("../components/paginaPrincipal/Archivo/Archivo")
);
const Contacto = lazy(() =>
  import("../components/paginaPrincipal/Contacto/Contacto")
);
import Layout from "../layouts/Layout";
import NavBarMobile from "../components/NavBar/NavMovil/NavbarMovil";

const PaginaIndex = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    document.title = "Diego Aldao | Desarrollador Frontend";
  }, []);

  return (
    <Layout currentSection={currentSection}>
      <Header setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />

      <Suspense fallback={<></>}>
        <Cursos setCurrentSection={setCurrentSection} />
        <Proyectos setCurrentSection={setCurrentSection} />
        <Archivo setCurrentSection={setCurrentSection} />
        <Contacto setCurrentSection={setCurrentSection} />
      </Suspense>
      <NavBarMobile currentSection={currentSection} />
    </Layout>
  );
};

export default PaginaIndex;
