import React from "react";
import About from "../components/About";
import Archivo from "../components/Archivo";
import Contacto from "../components/Contacto";
import Cursos from "../components/Cursos";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Proyectos from "../components/Proyectos";

const PaginaIndex = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Cursos />
      <Proyectos />
      <Archivo />
      <Contacto />
    </Layout>
  );
};

export default PaginaIndex;
