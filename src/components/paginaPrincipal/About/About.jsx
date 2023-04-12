import styled from "styled-components";
import Header from "../../HeaderSecciones";
import { Icon } from "@iconify/react";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Descripcion = styled.div`
  span {
    color: var(--color-principal);
  }
`;

const Tecnologias = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 30%));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      color: #8035e5;
    }
  }
  li:before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 18%;
    color: var(--color-principal);
  }
`;

const About = () => {
  return (
    <Contenedor id="about">
      <Header titulo={"sobre mi"} />
      <Descripcion>
        <p>
          ¡Hola! soy Diego, un desarrollador jr. viviendo en Mendoza, Arg. Tengo
          formacion y comprension solida de los conceptos fundamentales del
          desarrollo web, como <span>html</span>, <span>css</span> y{" "}
          <span>javascript</span>. Ademas, tengo experiencia en el desarrollo de
          aplicaciones utilizando <span>react</span> y he desarrollado proyectos
          que involucran la construccion de componentes, la gestion del estado y
          la integracion de <span>APIs</span>
        </p>
        <p>
          Soy un desarrollador apasionado y motivado que busca unirse a un
          equipo de desarrollo para aprender, crecer y construir soluciones
          efectivas. Estoy emocionado de explorar nuevas oportunidades y
          contribuir a proyectos.
        </p>
        <p>
          Estas son las tecnologías y herramientas con las que he trabajado
          últimamente:
        </p>
        <Tecnologias>
          <li>
            <p>react</p>
            <Icon icon="akar-icons:react-fill" />
          </li>
          <li>
            <p>styled-components</p>
            <Icon icon="simple-icons:styled-components" />
          </li>
          <li>
            <p>github</p>
            <Icon icon="ph:github-logo" />
          </li>
          <li>
            <p>mongodb</p>
            <Icon icon="teenyicons:mongodb-outline" />
          </li>
          <li>
            <p>node.js</p>
            <Icon icon="akar-icons:node-fill" />
          </li>
          <li>
            <p>firebase</p>
            <Icon icon="tabler:brand-firebase" />
          </li>
          <li>
            <p>css</p>
            <Icon icon="tabler:brand-css3" />
          </li>
          <li>
            <p>html</p>
            <Icon icon="tabler:brand-html5" />
          </li>
          <li>
            <p>javascript</p>
            <Icon icon="teenyicons:javascript-outline" />
          </li>
        </Tecnologias>
      </Descripcion>
    </Contenedor>
  );
};

export default About;
