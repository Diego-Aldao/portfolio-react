import React, { useState, useEffect } from "react";
import About from "../components/paginaPrincipal/About/About";
import Header from "../components/paginaPrincipal/Header/Header";
import Cursos from "../components/paginaPrincipal/Cursos/Cursos";
import Proyectos from "../components/paginaPrincipal/Proyectos/Proyectos";
import Archivo from "../components/paginaPrincipal/Archivo/Archivo";
import Contacto from "../components/paginaPrincipal/Contacto/Contacto";
import Layout from "../layouts/Layout";
import NavBarMobile from "../components/NavBar/NavMovil/NavbarMovil";

const PaginaIndex = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    document.title = "Diego Aldao — Desarrollador Frontend";
  }, []);

  return (
    <Layout currentSection={currentSection}>
      <Header setCurrentSection={setCurrentSection} />
      <Proyectos setCurrentSection={setCurrentSection} />
      <Archivo setCurrentSection={setCurrentSection} />
      <About setCurrentSection={setCurrentSection} />
      <Cursos setCurrentSection={setCurrentSection} />
      <Contacto setCurrentSection={setCurrentSection} />
      <NavBarMobile currentSection={currentSection} />
    </Layout>
  );
};

export default PaginaIndex;
