import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";
import archivo from "../../data/proyectos.json";

const Tabla = styled.table`
  width: 100%;
  text-align: left;
  padding-bottom: 100px;
  th,
  td {
    padding: 10px 10px 10px 0px;
    text-transform: capitalize;
  }
  th {
    font-size: clamp(14px, 2vw, 18px);
  }
  tr:hover {
    background: var(--light-navy);
  }
`;

const Tech = styled.th`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ListaTech = styled.td`
  display: none;
  font-size: 12px;
  font-family: var(--fuente-mono);
  span {
    display: inline-block;
  }
  @media (min-width: 768px) {
    display: inline-block;
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
  color: var(--lightest-slate);
  font-weight: 600;
`;

const Icono = styled(Icon)`
  height: 22px;
  width: 22px;
  margin-right: 5px;
  &:hover {
    color: var(--color-principal);
  }
`;

const TablaArchivo = () => {
  const [listaArchivo, setListaArchivo] = useState(archivo.data);
  return (
    <Tabla>
      <thead>
        <tr>
          <th>año</th>
          <th>titulo</th>
          <Tech>construido con</Tech>
          <th>link</th>
        </tr>
      </thead>
      <tbody>
        {listaArchivo.map((item) => {
          return (
            <tr>
              <Año>{item.año}</Año>
              <Titulo>{item.titulo}</Titulo>
              <ListaTech>
                {item.tecnologias.map((tecnologia) => {
                  return (
                    <span>
                      <Separador>·</Separador>
                      {tecnologia}
                    </span>
                  );
                })}
              </ListaTech>
              <td>
                <Icono icon="mi:external-link" inline={true} />
                <Icono icon="charm:github" inline={true} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Tabla>
  );
};

export default TablaArchivo;
