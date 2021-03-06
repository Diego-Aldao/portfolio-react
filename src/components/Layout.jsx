import styled from "styled-components";
import About from "./About";
import Archivo from "./Archivo";
import Contacto from "./Contacto";
import Cursos from "./Cursos";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Proyectos from "./Proyectos";

const Contenedor = styled.main`
  padding: 0px 25px;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  @media (min-width: 480px) {
    padding: 0px 50px 0px;
  }
  @media (min-width: 768px) {
    padding: 0px 100px;
  }
  @media (min-width: 1080px) {
    padding: 0px 150px 0px;
  }
`;

const Layout = () => {
  return (
    <Contenedor>
      <Navbar />
      <Header />
      <About />
      <Cursos />
      <Proyectos />
      <Archivo />
      <Contacto />
      <Footer />
    </Contenedor>
  );
};

export default Layout;
