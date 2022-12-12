import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Social = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--color-fuente-terciario);
  display: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--color-fuente-terciario);
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
const ListaSocial = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  li {
    font-size: 25px;
  }
  a {
    padding: 10px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }
  a:hover {
    color: var(--color-principal);
    padding-top: 5px;
    padding-bottom: 15px;
  }
`;
const Email = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 40px;
  left: auto;
  z-index: 10;
  color: var(--color-fuente-terciario);
  display: none;
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--fuente-mono);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    font-size: 14px;
  }
  a:hover {
    padding-top: 5px;
    padding-bottom: 15px;
    color: var(--color-principal);
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--color-fuente-terciario);
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const Aside = () => {
  return (
    <>
      <Social>
        <ListaSocial>
          <li>
            <a href="#">
              <Icon icon="charm:github" inline={true} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="akar-icons:instagram-fill" inline={true} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="lucide:linkedin" inline={true} />
            </a>
          </li>
        </ListaSocial>
      </Social>
      <Email>
        <a href="mailto:diego_ind@live.com.ar">diego_ind@live.com.ar</a>
      </Email>
    </>
  );
};

export default Aside;
