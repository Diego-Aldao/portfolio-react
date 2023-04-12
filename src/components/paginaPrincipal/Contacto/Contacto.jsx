import styled from "styled-components";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
  transition: var(--transition);
  &:hover {
    color: var(--color-bg-secundario);
    background: var(--color-principal);
  }
`;

const Contacto = () => {
  return (
    <Contenedor>
      <Header>
        <h2>contacto</h2>
      </Header>
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
