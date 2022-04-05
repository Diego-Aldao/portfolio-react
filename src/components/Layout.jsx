import styled from "styled-components";

const Contenedor = styled.main`
  width: 100%;
  height: 100%;
  padding: 0px 25px;
  max-width: 720px;
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
  return <Contenedor></Contenedor>;
};

export default Layout;
