import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Contenido = styled.footer`
  width: 100%;
  padding: 15px 0px 60px;
  @media (min-width: 768px) {
    padding: 15px 0px;
  }
`;

const Links = styled.ul`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  margin: 0px auto 30px;
  li {
    flex: 1 1 33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 15px;
    height: 15px;
  }
  a {
    padding: 5px;
    display: flex;
    align-items: end;
    font-size: 12px;
    gap: 5px;
    text-transform: capitalize;
  }
  a:hover {
    color: var(--color-principal);
  }
  @media (min-width: 768px) {
    a {
      padding: 5px;
      font-size: 14px;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const Nombre = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  a {
    font-family: var(--fuente-sans);
    color: var(--color-principal);
  }
`;

const Footer = () => {
  return (
    <Contenido>
      <Links>
        <li>
          <Link to="mailto:diegofrontdev@gmail.com">
            correo
            <Icon icon="fluent:mail-16-regular" inline={true} />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Diego-Aldao" target="_blank">
            github
            <Icon icon="charm:github" inline={true} />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/diego-aldao" target="_blank">
            linkedin
            <Icon icon="akar-icons:linkedin-fill" />
          </Link>
        </li>
      </Links>
      <Nombre>
        hecho por{" "}
        <Link to="https://github.com/Diego-Aldao" target="_blank">
          diego aldao
        </Link>
      </Nombre>
    </Contenido>
  );
};

export default Footer;
