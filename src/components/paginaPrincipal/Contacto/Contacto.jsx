import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  p {
    span {
      color: var(--color-principal);
    }
  }
  a {
    color: var(--color-principal);
    border: 1px solid var(--color-principal);
    border-radius: 4px;
    font-size: 12px;
    font-family: var(--fuente-mono);
    line-height: 1;
    font-weight: 500;
    cursor: pointer;
    padding: 15px 10px;
    margin: 40px auto 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0000;
    text-transform: capitalize;
    transition: var(--transition);
    max-width: 130px;
    &:hover {
      color: var(--color-bg-secundario);
      background: var(--color-principal);
    }
    @media (min-width: 768px) {
      max-width: 160px;
      font-size: 14px;
    }
  }
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
  span {
    margin-right: 5px;
    color: var(--color-principal);
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  h2 {
    font-size: clamp(20px, 4vw, 26px);
    text-transform: capitalize;
    margin: 0px;
  }
`;
const Titulo = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 600;
  color: var(--color-fuente-principal);
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
`;
const Trigger = styled.div`
  position: absolute;
  width: 50px;
  height: 10%;
  z-index: -10;
  bottom: 0;
  left: 50%;
`;

const Contacto = ({ setCurrentSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) setCurrentSection("contacto");
  }, [inView]);
  return (
    <Contenedor id="contacto">
      <Header>
        <h2>contacto</h2>
      </Header>
      <Titulo>trabajemos juntos</Titulo>
      <Trigger ref={ref}></Trigger>
      <p>
        Actualmente estoy buscando oportunidades para <span>aprender</span>,{" "}
        <span>crecer</span> como profesional y <span>aportar</span> el máximo
        valor posible. Estoy interesado en cualquier tecnología y en cualquier
        proyecto que me permita desarrollar mis habilidades y conocimientos.
      </p>
      <Link to="mailto:diegofrontdev@gmail.com">contactarme</Link>
    </Contenedor>
  );
};

export default Contacto;
