import styled from "styled-components";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;

const HeaderNumerado = styled.header`
  margin-bottom: 40px;
  span {
    font-family: var(--fuente-mono);
    margin-right: 5px;
    font-weight: 100;
    color: var(--color-principal);
    font-size: 20px;
  }
  h2 {
    font-size: clamp(20px, 4vw, 26px);
    text-transform: capitalize;
    margin: 0px;
  }
`;

const Descripcion = styled.div`
  span {
    color: var(--color-principal);
  }
`;

const Tecnologias = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 50%));
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
  }
  li:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--color-principal);
  }
`;

const About = () => {
  return (
    <Contenedor>
      <HeaderNumerado>
        <h2>
          <span>01.</span>sobre mi
        </h2>
      </HeaderNumerado>
      <Descripcion>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          provident eligendi harum tempore consequatur odit expedita cumque
          exercitationem aliquid, quae officia illum non debitis, qui ducimus ex
          soluta, assumenda molestiae. Neque itaque inventore{" "}
          <span>veritatis laborum?</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor
          laboriosam accusantium similique <span>laborum iste vitae</span>{" "}
          accusamus odio, voluptatum eius, excepturi necessitatibus vel repellat
          quis?
        </p>
        <p>
          Estas son las tecnologías y herramientas con las que he trabajado
          actualmente:
        </p>
        <Tecnologias>
          <li>react</li>
          <li>node</li>
          <li>css</li>
          <li>html</li>
          <li>javascript</li>
          <li>sql</li>
        </Tecnologias>
      </Descripcion>
    </Contenedor>
  );
};

export default About;
