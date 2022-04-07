import styled from "styled-components";
import imgPrueba from "../images/img-prueba.jpg";

const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 30px;
  align-items: center;
  @media (min-width: 480px) {
    margin-bottom: 70px;
  }
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const ContenidoProyecto = styled.div`
  grid-column: 1 / -1;
  padding: 25px 25px 20px;
  position: relative;
  z-index: 5;
  grid-row: 1 / -1;
  .subtitulo {
    font-family: var(--fuente-mono);
    color: var(--color-principal);
    text-transform: capitalize;
    font-size: 13px;
    margin-bottom: 10px;
  }
  h3 {
    text-transform: capitalize;
    font-size: clamp(22px, 4vw, 26px);
    margin-bottom: 10px;
    color: var(--white);
  }
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;
    li {
      margin: 0px 10px 5px 0px;
      color: var(--light-slate);
      font-family: var(--fuente-mono);
      text-transform: capitalize;
      font-size: 15px;
      font-weight: 600;
    }
  }
  @media (min-width: 480px) {
    padding: 40px 40px 30px;
  }
  @media (min-width: 768px) {
    grid-column: ${(props) => (props.textend ? "5 / 13" : "1 / 9")};
    text-align: ${(props) => (props.textend ? "end" : "start")};
    padding: 0px;
    ul {
      justify-content: ${(props) =>
        props.textend ? "flex-end" : "flex-start"};
    }
  }
  @media (min-width: 1080px) {
    grid-column: ${(props) => (props.textend ? "7 / 13" : "1 / 7")};
  }
`;

const DescripcionProyecto = styled.div`
  padding: 20px 0px;
  p {
    color: var(--light-slate);
    font-size: 16px;
  }
  span {
    color: var(--color-principal);
  }
  @media (min-width: 768px) {
    padding: 25px;
    background: var(--navy);
  }
`;
const LinksProyecto = styled.div`
  a {
    padding: 10px;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    color: var(--light-slate);
  }
`;
const ImgProyecto = styled.div`
  grid-column: 1 / -1;
  height: 100%;
  max-height: 340px;
  position: relative;
  z-index: 1;
  grid-row: 1 / -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1) brightness(70%);
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: var(--navy);
    opacity: 0.8;
  }
  &:hover {
    img {
      filter: brightness(100%);
    }
    &:after {
      background: none;
    }
  }
  @media (min-width: 768px) {
    grid-column: ${(props) => (props.imgend ? "6 / 13" : "1 / 8")};
    &:after {
      background: var(--color-principal);
      mix-blend-mode: multiply;
    }
  }
`;

const Proyecto = ({ textend, imgend }) => {
  return (
    <Item>
      <ImgProyecto imgend={imgend}>
        <img src={imgPrueba} alt="" />
      </ImgProyecto>
      <ContenidoProyecto textend={textend}>
        <p className="subtitulo">react app</p>
        <h3>echo design</h3>
        <DescripcionProyecto>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, recusandae quibusdam.
            <span> Nihil iusto amet porro</span> incidunt corrupti odio aut
            delectus.
          </p>
        </DescripcionProyecto>
        <ul>
          <li>vs code</li>
          <li>prettier</li>
          <li>eslint</li>
          <li>javas</li>
        </ul>
        <LinksProyecto>
          <a href="">L</a>
          <a href="">D</a>
        </LinksProyecto>
      </ContenidoProyecto>
    </Item>
  );
};

export default Proyecto;
