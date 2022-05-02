import React from "react";
import styled from "styled-components";

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
    font-size: 14px;
  }
`;

const Tech = styled.th`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
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
  font-size: 14px;
`;
const Titulo = styled.td`
  color: var(--lightest-slate);
  font-weight: 600;
`;

const TablaArchivo = () => {
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
        <tr>
          <Año>2020</Año>
          <Titulo>portfolio</Titulo>
          <ListaTech>
            <span>
              react <Separador>·</Separador>
            </span>
            <span>
              styled-components <Separador>·</Separador>
            </span>
            <span>
              gatsby <Separador>·</Separador>
            </span>
            <span>react-router</span>
          </ListaTech>
          <td>C</td>
        </tr>
        <tr>
          <Año>2021</Año>
          <Titulo>app clima</Titulo>
          <ListaTech>
            <span>
              react <Separador>·</Separador>
            </span>
            <span>
              styled-components <Separador>·</Separador>
            </span>
            <span>
              gatsby <Separador>·</Separador>
            </span>
            <span>react-router</span>
          </ListaTech>
          <td>C</td>
        </tr>
        <tr>
          <Año>2022</Año>
          <Titulo>sitio para escuela de nivel inicial</Titulo>
          <ListaTech>
            <span>
              react <Separador>·</Separador>
            </span>
            <span>
              styled-components <Separador>·</Separador>
            </span>
            <span>
              gatsby <Separador>·</Separador>
            </span>
            <span>react-router</span>
          </ListaTech>
          <td>C</td>
        </tr>
        <tr>
          <Año>2022</Año>
          <Titulo>sitio de fotografia</Titulo>
          <ListaTech>
            <span>
              react <Separador>·</Separador>
            </span>
            <span>
              styled-components <Separador>·</Separador>
            </span>
            <span>
              gatsby <Separador>·</Separador>
            </span>
            <span>react-router</span>
          </ListaTech>
          <td>C</td>
        </tr>
        <tr>
          <Año>2022</Año>
          <Titulo>echo design</Titulo>
          <ListaTech>
            <span>
              react <Separador>·</Separador>
            </span>
            <span>
              styled-components <Separador>·</Separador>
            </span>
            <span>
              gatsby <Separador>·</Separador>
            </span>
            <span>react-router</span>
          </ListaTech>
          <td>C</td>
        </tr>
      </tbody>
    </Tabla>
  );
};

export default TablaArchivo;
