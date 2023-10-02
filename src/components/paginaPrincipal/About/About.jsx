import styled from "styled-components";
import Header from "../../HeaderSecciones";
import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Section from "../../Section";

const listadoTectnologias = [
  {
    nombre: "react",
    icono: <Icon icon="akar-icons:react-fill" />,
  },
  {
    nombre: "styled-components",
    icono: <Icon icon="simple-icons:styledcomponents" />,
  },
  {
    nombre: "github",
    icono: <Icon icon="ph:github-logo" />,
  },
  {
    nombre: "next.js",
    icono: <Icon icon="teenyicons:nextjs-outline" />,
  },
  {
    nombre: "node.js",
    icono: <Icon icon="akar-icons:node-fill" />,
  },
  {
    nombre: "tailwindcss",
    icono: <Icon icon="teenyicons:tailwind-outline" />,
  },
  {
    nombre: "typeScript",
    icono: <Icon icon="teenyicons:typescript-outline" />,
  },
  {
    nombre: "vite",
    icono: <Icon icon="tabler:brand-vite" />,
  },
  {
    nombre: "javaScript",
    icono: <Icon icon="teenyicons:javascript-outline" />,
  },
  {
    nombre: "vercel",
    icono: <Icon icon="radix-icons:vercel-logo" />,
  },
  {
    nombre: "figma",
    icono: <Icon icon="teenyicons:figma-outline" />,
  },
  {
    nombre: "react-router",
    icono: <Icon icon="simple-icons:reactrouter" />,
  },
];

const Descripcion = styled.div`
  span {
    color: var(--color-principal);
  }
`;

const Tecnologias = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 10px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  li {
    flex: 1 40%;
    position: relative;

    padding-left: 15px;
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    display: flex;

    justify-content: flex-start;
    align-items: center;
    svg {
      width: 25px;
      min-width: 25px;
      height: 25px;
      min-height: 25px;
      color: #8035e5;
      display: none;
    }
    p {
      font-size: 12px;
    }
  }
  li:before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 18%;
    color: var(--color-principal);
  }

  @media (min-width: 580px) {
    li {
      gap: 10px;
      svg {
        display: initial;
      }
    }
  }

  @media (min-width: 768px) {
    li {
      flex: 1 30%;
    }
  }
  @media (min-width: 1024px) {
    li {
      p {
        font-size: 14px;
      }
      flex: 1 24%;
    }
  }
`;

const About = ({ setCurrentSection }) => {
  const { ref, inView } = useInView({
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
          {listadoTectnologias.map((tecnologia) => (
            <li>
              <p>{tecnologia.nombre}</p>
              {tecnologia.icono}
            </li>
          ))}
        </Tecnologias>
      </Descripcion>
    </Section>
  );
};

export default About;
