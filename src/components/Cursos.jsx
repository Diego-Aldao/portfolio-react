import styled from "styled-components";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 700px;
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

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Lista = styled.div`
  display: flex;
  overflow: scroll;
  margin-bottom: 40px;
  @media (min-width: 600px) {
    flex-direction: column;
    width: 125px;
    overflow: unset;
    margin-bottom: 0px;
  }
`;
const Boton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 0px 15px;
  border: 0px;
  border-bottom: 2px solid var(--lightest-navy);
  height: 42px;
  background: none;
  transition: var(--transition);
  &::selection {
    color: var(--color-principal);
  }
  span {
    text-align: center;
    color: var(--slate);
    text-transform: capitalize;
    font-family: var(--fuente-mono);
    font-size: 14px;
    font-weight: 600;
    transition: var(--transition);
  }
  &:hover {
    border-color: var(--color-principal);
    span {
      color: var(--color-principal);
    }
  }
  @media (min-width: 600px) {
    border-bottom: none;
    border-left: 2px solid var(--lightest-navy);
  }
`;

const Detalle = styled.div`
  h3 {
    text-transform: capitalize;
    margin-bottom: 5px;
  }
  h4 {
    color: var(--color-principal);
    text-transform: capitalize;
    margin-bottom: 7px;
  }
  p {
    font-family: var(--fuente-mono);
    text-transform: capitalize;
    color: var(--light-slate);
    font-size: 14px;
  }
  ul {
    margin-top: 25px;
  }
  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    font-size: 15px;
    letter-spacing: 0.2px;
    line-height: 1.5;

    &:before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-principal);
    }
  }
  @media (min-width: 600px) {
    margin-left: 20px;
    width: calc(100% - 145px);
    padding: 10px 5px;
  }
`;

const Cursos = () => {
  return (
    <Contenedor>
      <HeaderNumerado>
        <h2>
          <span>02.</span>cursos
        </h2>
      </HeaderNumerado>
      <Contenido>
        <Lista>
          <Boton>
            <span>curso 01</span>
          </Boton>
          <Boton>
            <span>curso 02</span>
          </Boton>
          <Boton>
            <span>curso 03</span>
          </Boton>
          <Boton>
            <span>curso 04</span>
          </Boton>
          <Boton>
            <span>curso 05</span>
          </Boton>
        </Lista>
        <Detalle>
          <h3>desarrollo fullstack</h3>
          <h4>iters</h4>
          <p>ago 2021 - ene 2022</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              voluptatibus explicabo tempora repellendus quisquam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              voluptatibus explicabo tempora repellendus quisquam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea
              voluptatibus explicabo tempora repellendus quisquam.
            </li>
          </ul>
        </Detalle>
      </Contenido>
    </Contenedor>
  );
};

export default Cursos;
