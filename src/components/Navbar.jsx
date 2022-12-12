import styled, { keyframes } from "styled-components";
import inicio from "../images/iconos/inicio.png";
import curso from "../images/iconos/curso.png";
import proyecto from "../images/iconos/proyecto.png";
import usuario from "../images/iconos/usuario.png";
import contacto from "../images/iconos/contacto.png";

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
  background: var(--color-bg-principal);
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
  color: var(--color-fuente-principal);
  font-weight: 600;
  a {
    padding: 10px 15px;
    font-family: var(--fuente-sans);
    font-size: 13px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
  a:hover {
    color: var(--color-principal);
  }
  li:last-child {
    a {
      font-family: var(--fuente-mono);
    }
    a:hover {
      color: var(--color-bg-principal);
      background: var(--color-principal);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Numeracion = styled.span`
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-right: 10px;
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
              <Numeracion>
                <img src={inicio} alt="" />
              </Numeracion>
              inicio
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>
                <img src={usuario} alt="" />
              </Numeracion>
              about
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>
                <img src={curso} alt="" />
              </Numeracion>
              cursos
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>
                <img src={proyecto} alt="" />
              </Numeracion>
              proyectos
            </a>
          </li>
          <li>
            <a href="#">
              <Numeracion>
                <img src={contacto} alt="" />
              </Numeracion>
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
