import styled, { css } from "styled-components";
import avatar from "../../../images/avatar.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const MainHeader = styled.section`
  color: var(--color-principal);
  margin: 0 auto;
  max-width: 1100px;
  margin: 100px auto 0px;
  padding: 80px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .destino {
    position: absolute;
    top: -50px;
    visibility: 0;
    opacity: 0;
  }
  .info {
    flex-direction: column;
    justify-content: center;
    display: flex;
  }
  .imagen {
    display: none;
  }
  @media (min-width: 1024px) {
    margin-bottom: 70px;
    .imagen {
      display: block;
      height: 220px;
      img {
        height: 100%;
      }
    }
  }
`;

const MiniTexto = styled.span`
  color: var(--color-principal);
  font-family: var(--fuente-mono);
  transform: scale(1, 1.1);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Titulo = styled.h1`
  color: var(--color-fuente-principal);
  font-size: clamp(36px, 6vw, 68px);
  text-transform: capitalize;
  font-family: var(--fuente-sans);
  ${(props) =>
    props.subtitulo &&
    css`
      color: var(--color-fuente-secundario);
      margin-bottom: 20px;
      text-transform: lowercase;
      font-size: clamp(32px, 4.5vw, 52px);
      text-transform: capitalize;
    `}
`;

const Descripcion = styled.p`
  color: var(--color-fuente-secundario);
  font-size: clamp(16px, 2vw, 18px);
  max-width: 540px;
  margin-bottom: 30px !important;
  span {
    text-transform: capitalize;
    color: var(--color-principal);
    display: inline-flex;
    align-items: center;
    margin-left: 5px;
    svg {
      width: 25px;
    }
  }
`;

const ContenedorBotones = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  a {
    font-family: var(--fuente-principal);
    border-radius: 4px;
    padding: 10px 10px;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    font-weight: 500;
    align-items: center;
    color: var(--color-principal);
    background: none;
    border: 1px solid var(--color-principal);
    svg {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }

    &:hover {
      background: var(--color-principal);
      color: var(--color-bg-principal);
    }
  }
  .lleno {
    color: var(--color-bg-principal);
    border: 1px solid var(--color-principal);
    background: var(--color-principal);
  }
`;

const Header = ({ setCurrentSection }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) setCurrentSection("inicio");
  }, [inView]);

  return (
    <MainHeader>
      <div className="destino" id="inicio"></div>
      <div className="info">
        <MiniTexto ref={ref}>hola, mi nombre es</MiniTexto>
        <Titulo>diego aldao.</Titulo>
        <Titulo subtitulo>desarrollador frontend jr.</Titulo>
        <Descripcion>
          Desarrollador junior apasionado por el desarrollo web y, en
          particular, por la construcción de interfaces de usuario interactivas
          utilizando
          <span>
            {" "}
            react
            <Icon icon="akar-icons:react-fill" />
          </span>
          .
        </Descripcion>
        <ContenedorBotones>
          <Link to="/DiegoAldao_CV.pdf" target="_blank" className="lleno">
            curriculum <Icon icon="ph:file-text-bold" />
          </Link>
          <Link to="mailto:diego_ind@live.com.ar">
            contactarme <Icon icon="ph:chat-text-light" />
          </Link>
        </ContenedorBotones>
      </div>
      <div className="imagen">
        <img src={avatar} alt="" />
      </div>
    </MainHeader>
  );
};

export default Header;
