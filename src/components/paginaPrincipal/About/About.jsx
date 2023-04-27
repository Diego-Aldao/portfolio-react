import styled from "styled-components";
import Header from "../../HeaderSecciones";
import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Section from "../../Section";

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
    padding-left: 15px;
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
    p {
      font-size: 14px;
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

const About = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) setCurrentSection("about");
  }, [inView]);

  return (
    <Section id="about">
      <div className="destino"></div>
      <Header titulo={"sobre mi"} />
      <Descripcion>
        <p ref={ref}>
          ¡Hola! soy Diego, un desarrollador jr. viviendo en Mendoza, Arg. Tengo
          formación y comprensión sólida de los conceptos fundamentales del
          desarrollo web, como <span>HTML</span>, <span>CSS</span> y{" "}
          <span>JavaScript</span>. Además, tengo experiencia en el desarrollo de
          aplicaciones utilizando <span>React</span> y he desarrollado proyectos
          que involucran la construcción de componentes, la gestión del estado y
          la integración de <span>APIs</span>
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
            <p>react-router</p>
            <Icon icon="logos:react-router" />
          </li>
          <li>
            <p>vite</p>
            <Icon icon="tabler:brand-vite" />
          </li>
          <li>
            <p>javascript</p>
            <Icon icon="teenyicons:javascript-outline" />
          </li>
        </Tecnologias>
      </Descripcion>
    </Section>
  );
};

export default About;
