import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Aside from "./Aside";

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

const Layout = ({ children }) => {
  return (
    <Contenedor>
      <Navbar />
      <Aside />
      {children}
      <Footer />
    </Contenedor>
  );
};

export default Layout;
