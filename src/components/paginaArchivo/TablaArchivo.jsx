import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import archivo from "../../data/proyectos.json";
import comparar from "../../Utils/comparar";

const Tabla = styled.table`
  width: 100%;
  text-align: left;
  padding-bottom: 100px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 400px);
  th,
  td {
    padding: 10px;
    text-transform: capitalize;
  }
  th {
    font-size: clamp(14px, 2vw, 18px);
  }
  tbody tr:hover {
    background: var(--color-bg-secundario);
  }
`;

const Tech = styled.th`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ListaTech = styled.td`
  font-size: 12px;
  font-family: var(--fuente-mono);
  display: none;
  span {
    display: inline-block;
  }
  align-items: center;
  @media (min-width: 768px) {
    display: table-cell;
  }
`;
const Separador = styled.span`
  margin: 0px 5px;
`;
const Año = styled.td`
  color: var(--color-principal);
  font-family: var(--fuente-mono);
  font-size: clamp(14px, 2vw, 18px);
`;
const Titulo = styled.td`
  color: var(--color-fuente-terciario);
  font-weight: 600;
`;

const Links = styled.td`
  display: flex;
  gap: 5px;
  align-items: center;
  svg {
    height: 14px;
    width: 14px;
    &:hover {
      color: var(--color-principal);
    }
  }
  @media (min-width: 768px) {
    svg {
      height: 17px;
      width: 17px;
    }
  }
  @media (min-width: 1024px) {
    svg {
      height: 22px;
      width: 22px;
    }
  }
`;

const TablaArchivo = () => {
  let { data } = archivo;

  const [listaArchivo, setListaArchivo] = useState([]);

  useEffect(() => {
    let ordenados = data.sort(comparar);
    setListaArchivo(ordenados);
  }, []);

  return (
    <Tabla>
      <thead>
        <tr>
          <th>año</th>
          <th>titulo</th>
          <Tech>construido con</Tech>
          <th>links</th>
        </tr>
      </thead>
      <tbody>
        {listaArchivo.map((item) => {
          return (
            <tr key={item.id}>
              <Año>{item.año}</Año>
              <Titulo>{item.titulo}</Titulo>
              <ListaTech>
                {item.tecnologias.map((tecnologia) => {
                  return (
                    <span key={tecnologia.id}>
                      <Separador>·</Separador>
                      {tecnologia.nombre}
                    </span>
                  );
                })}
              </ListaTech>
              <Links>
                {item.links.map((link) => {
                  return (
                    <a href={link.url} target="_blank" key={link.id}>
                      {link.codigo ? (
                        <Icon icon="charm:github" inline={true} />
                      ) : (
                        <Icon icon="mi:external-link" inline={true} />
                      )}
                    </a>
                  );
                })}
              </Links>
            </tr>
          );
        })}
      </tbody>
    </Tabla>
  );
};

export default TablaArchivo;
