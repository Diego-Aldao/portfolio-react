import styled from "styled-components";
import Navbar from "./Navbar";

const Contenedor = styled.main`
  padding: 0px 25px;
  max-width: 780px;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;

const Layout = () => {
  return (
    <Contenedor>
      <Navbar />
    </Contenedor>
  );
};

export default Layout;
