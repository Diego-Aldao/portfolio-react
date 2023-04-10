import React from "react";
import About from "../components/paginaPrincipal/About";
import Archivo from "../components/paginaPrincipal/Archivo/Archivo";
import Contacto from "../components/paginaPrincipal/Contacto";
import Cursos from "../components/paginaPrincipal/Cursos/Cursos";
import Header from "../components/paginaPrincipal/Header";
import Layout from "../layouts/Layout";
import Proyectos from "../components/paginaPrincipal/Proyectos/Proyectos";

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
