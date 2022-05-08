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
  color: var(--light-slate);
  display: none;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
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
    padding: 10px;
    font-size: 25px;
  }
  li:last-of-type {
    margin-bottom: 20px;
  }
`;
const Email = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 40px;
  left: auto;
  z-index: 10;
  color: var(--light-slate);
  display: none;
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--fuente-mono);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    font-size: 14px;
  }
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
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
            <Icon icon="charm:github" inline={true} />
          </li>
          <li>
            <Icon icon="akar-icons:instagram-fill" inline={true} />
          </li>
          <li>
            <Icon icon="lucide:linkedin" inline={true} />
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
