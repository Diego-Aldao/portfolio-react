import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar/Navbar";
import Aside from "../components/Aside";

const Contenedor = styled.main`
  padding: 0px 15px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (min-width: 480px) {
    padding: 0px 25px 0px;
  }
  @media (min-width: 768px) {
    padding: 0px 60px 0px;
  }
`;

const Layout = ({ children, currentSection }) => {
  return (
    <Contenedor>
      <Navbar currentSection={currentSection} />
      <Aside />
      {children}
      <Footer />
    </Contenedor>
  );
};

export default Layout;
