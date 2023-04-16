import styled from "styled-components";
import LinkNavbar from "./ItemNavbar";
import ModoOscuro from "./ModoOscuro";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navegacion = styled.nav`
  width: 100%;
  height: 100px;
  padding: 25px 15px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: var(--color-bg-principal);
  z-index: 9;
  @media (min-width: 480px) {
    padding: 15px 25px;
  }
  @media (min-width: 768px) {
    padding: 25px 60px;
  }
`;
const Contenido = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
`;
const Logo = styled(Link)`
  width: 50px;
  height: 50px;
  color: var(--color-principal);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
`;
const NavLinks = styled.ul`
  display: none;
  width: 100%;
  height: 100%;
  color: var(--color-fuente-principal);
  font-weight: 600;
  .nav-curriculum {
    padding: 0px;
    margin: 0px 10px;
    a:hover {
      color: var(--color-bg-principal);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .nav-curriculum {
      margin: 0px 15px;
    }
    a {
      font-size: 14px;
    }
  }
`;

const Navbar = ({ currentSection }) => {
  return (
    <Navegacion>
      <Contenido>
        <Logo to="/">
          <img src={logo} alt="" />
        </Logo>
        <NavLinks currentSection={currentSection}>
          <LinkNavbar currentSection={currentSection} clase={"inicio"} />
          <LinkNavbar currentSection={currentSection} clase={"about"} />
          <LinkNavbar currentSection={currentSection} clase={"cursos"} />
          <LinkNavbar currentSection={currentSection} clase={"proyectos"} />
          <LinkNavbar currentSection={currentSection} clase={"contacto"} />
          <ModoOscuro />
        </NavLinks>
        <ModoOscuro clase="movil" />
      </Contenido>
    </Navegacion>
  );
};

export default Navbar;
