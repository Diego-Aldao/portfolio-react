import styled, { keyframes } from "styled-components";

const animacion = keyframes`
    0% { width: 50% ;}
    50% { width: 75%;}
    100% { width: 50%;}
`;

const Navegacion = styled.nav`
  width: 100%;
  height: 100px;
  padding: 25px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: var(--navy);
  z-index: 9;
  @media (min-width: 768px) {
    padding: 25px 50px;
  }
`;
const Contenido = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
  margin: 0 auto;
  height: 100%;
`;

const Logo = styled.span`
  width: 50px;
  height: 50px;
  color: var(--color-principal);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-principal);
  font-weight: 500;
  font-size: 24px;
`;
const Hamburguesa = styled.span`
  width: 50px;
  height: 50px;
  padding: 10px;
  color: var(--color-principal);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  span {
    width: 100%;
    height: 2px;
    background: var(--color-principal);
    margin-bottom: 5px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const SpanAnimado = styled.span`
  width: 50%;
  animation: ${animacion} 0.3s infinite ease-in-out;
`;

const NavLinks = styled.ul`
  display: none;
  width: 100%;
  height: 100%;
  color: var(--lightest-slate);
  font-weight: 600;
  li:last-child {
    a {
      font-family: var(--fuente-mono);
    }
  }
  a {
    padding: 10px 15px;
    font-family: var(--fuente-sans);
    font-size: 13px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Numeracion = styled.span`
  font-family: var(--fuente-mono);
  margin-right: 5px;
  color: var(--color-principal);
  font-size: 14px;
`;

const BotonCurriculum = styled.a`
  color: var(--color-principal);
  border: 2px solid var(--color-principal);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  line-height: 1;
  cursor: pointer;

  margin-left: 15px;
`;

const Navbar = () => {
  return (
    <Navegacion>
      <Contenido>
        <Logo>D</Logo>
        <NavLinks>
          <li>
            <a href="#">
              <Numeracion>01.</Numeracion>
              inicio
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>02.</Numeracion>
              about
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>03.</Numeracion>
              proyectos
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>04.</Numeracion>
              contacto
            </a>
          </li>
          <li>
            <BotonCurriculum>curriculum</BotonCurriculum>
          </li>
        </NavLinks>
        <Hamburguesa>
          <span></span>
          <SpanAnimado></SpanAnimado>
          <span></span>
        </Hamburguesa>
      </Contenido>
    </Navegacion>
  );
};

export default Navbar;
