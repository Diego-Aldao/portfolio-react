import React from "react";
import Layout from "../layouts/Layout";
import HeaderArchivo from "../components/paginaArchivo/HeaderArchivo";
import TablaArchivo from "../components/paginaArchivo/TablaArchivo";

const PaginaArchivo = () => {
  return (
    <Layout>
      <HeaderArchivo />
      <TablaArchivo />
    </Layout>
  );
};

export default PaginaArchivo;
