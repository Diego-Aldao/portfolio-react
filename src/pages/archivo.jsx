import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import HeaderArchivo from "../components/paginaArchivo/HeaderArchivo";
import TablaArchivo from "../components/paginaArchivo/TablaArchivo";
import NavMovil from "../components/paginaArchivo/NavMovil";

const PaginaArchivo = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Diego Aldao | Archivo";
  }, []);

  return (
    <Layout>
      <HeaderArchivo />
      <TablaArchivo />
      <NavMovil />
    </Layout>
  );
};

export default PaginaArchivo;
