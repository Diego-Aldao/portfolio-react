import React from "react";
import Layout from "../layouts/Layout";
import HeaderArchivo from "../components/paginaArchivo/HeaderArchivo";
import TablaArchivo from "../components/paginaArchivo/TablaArchivo";
import NavMovil from "../components/paginaArchivo/NavMovil";

const PaginaArchivo = () => {
  return (
    <Layout>
      <HeaderArchivo />
      <TablaArchivo />
      <NavMovil />
    </Layout>
  );
};

export default PaginaArchivo;
