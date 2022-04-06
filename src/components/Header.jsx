import styled, { css } from "styled-components";

const MainHeader = styled.section`
  color: var(--color-principal);
  margin: 0 auto;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  @media (min-width: 480px) {
    padding-bottom: 0px;
  }
`;

const MiniTexto = styled.span`
  color: var(--color-principal);
  font-family: var(--fuente-mono);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Titulo = styled.h1`
  color: var(--lightest-slate);
  font-size: clamp(36px, 7vw, 68px);
  text-transform: capitalize;
  font-family: var(--fuente-sans);

  ${(props) =>
    props.subtitulo &&
    css`
      color: var(--slate);
      margin-bottom: 20px;
      text-transform: lowercase;
      font-size: clamp(32px, 7vw, 60px);
      &::first-letter {
        text-transform: capitalize;
      }
    `}
`;

const Descripcion = styled.p`
  color: var(--slate);
  font-size: clamp(16px, 2vw, 18px);
  max-width: 540px;
  margin: 0px;
  span {
    text-transform: capitalize;
    color: var(--color-principal);
  }
`;

const Boton = styled.a`
  color: var(--color-principal);
  border: 2px solid var(--color-principal);
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 16px;
  font-family: var(--fuente-mono);
  line-height: 1;
  cursor: pointer;
  margin-top: 50px;
  display: inline-block;
  width: 140px;
  text-transform: capitalize;
`;

const Header = () => {
  return (
    <MainHeader>
      <MiniTexto>hola, mi nombre es</MiniTexto>
      <Titulo>diego aldao.</Titulo>
      <Titulo subtitulo>construyo sitios para la web.</Titulo>
      <Descripcion>
        Im a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, Im focused on
        building accessible, human-centered products at{" "}
        <span>mercadolibre</span>
      </Descripcion>
      <Boton>contactarme</Boton>
    </MainHeader>
  );
};

export default Header;
