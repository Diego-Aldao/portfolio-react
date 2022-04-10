import styled from "styled-components";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const HeaderNumerado = styled.header`
  margin-bottom: 40px;
  text-align: center;
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
const Titulo = styled.h2`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 600;
  color: var(--lightest-slate);
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
`;
const Boton = styled.button`
  color: var(--color-principal);
  border: 1px solid var(--color-principal);
  border-radius: 4px;
  font-size: 15px;
  font-family: var(--fuente-mono);
  line-height: 1;
  cursor: pointer;
  padding: 1.25rem 1.75rem;
  margin: 40px auto 0px;
  display: block;
  background: #0000;
  text-transform: capitalize;
`;

const Contacto = () => {
  return (
    <Contenedor>
      <HeaderNumerado>
        <h2>
          <span>04.</span>contacto
        </h2>
      </HeaderNumerado>
      <Titulo>trabajemos juntos</Titulo>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Boton>contactarme</Boton>
    </Contenedor>
  );
};

export default Contacto;
