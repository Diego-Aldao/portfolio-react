import styled from "styled-components";
import { Icon } from "@iconify/react";

const Contenido = styled.footer`
  width: 100%;
  padding: 15px 0px;
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 270px;
  margin: 0px auto 30px;
  a {
    padding: 10px;
  }
  a:hover {
    color: var(--color-principal);
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
          <a href="">
            <Icon icon="fluent:mail-16-regular" inline={true} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon icon="charm:github" inline={true} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon icon="akar-icons:linkedin-fill" inline={true} />
          </a>
        </li>
      </Links>
      <Nombre>
        hecho por <a href="">diego aldao</a>
      </Nombre>
    </Contenido>
  );
};

export default Footer;
