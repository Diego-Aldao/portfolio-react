import styled from "styled-components";
import ItemArchivo from "./ItemArchivo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import archivo from "../data/proyectos.json";
import { useSpring, useTrail, animated } from "react-spring";
import listado from "../images/iconos/lista-proyectos.png";

const Contenedor = styled.section`
  padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
  span {
    margin-right: 5px;
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  h2 {
    font-size: clamp(18px, 3vw, 26px);
    text-transform: capitalize;
  }
`;

const ListaArchivo = animated(styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  overflow: hidden;
`);

const Boton = styled.button`
  color: var(--color-principal);
  border: 1px solid var(--color-principal);
  border-radius: 4px;
  font-size: 15px;
  font-family: var(--fuente-mono);
  line-height: 1;
  cursor: pointer;
  padding: 1.25rem 1.75rem;
  margin: 80px auto 0px;
  display: block;
  background: #0000;
  text-transform: capitalize;
  transition: var(--transition);
  &:hover {
    color: var(--color-bg-secundario);
    background: var(--color-principal);
  }
`;

const VerMas = styled(Link)`
  color: var(--color-principal);
  font-size: 16px;
`;

const Archivo = () => {
  const [listaArchivo, setListaArchivo] = useState(archivo.data);
  const [maxLista, setMaxLista] = useState(3);
  const [toggle, setToggle] = useState(false);
  const [style, animate] = useSpring(() => ({ height: "325px" }), []);

  //Estilos de Trail de react spring
  const trail = useTrail(maxLista, {
    config: { mass: 5, tension: 4000, friction: 200 },
    opacity: toggle ? 1 : 0,
    left: toggle ? 0 : 50,
    top: toggle ? 0 : 50,
    from: { opacity: 0, left: 50, top: 50 },
  });

  useEffect(() => {
    animate({
      height: toggle ? "650px" : "325px",
    });

    //Guardar maxLista de items en el state de lista archivo
    const listaFormateada = archivo.data.slice(0, maxLista);
    setListaArchivo(listaFormateada);
  }, [maxLista]);

  const handleClick = () => {
    toggle ? setMaxLista(3) : setMaxLista(6);
    setToggle(!toggle);
  };

  return (
    <Contenedor>
      <Header>
        <h2>
          <span>
            <img src={listado} alt="" />
          </span>
          lista de proyectos <VerMas to="/archivo">- ver el archivo -</VerMas>
        </h2>
      </Header>

      <ListaArchivo style={style}>
        {listaArchivo.map((item) => {
          return (
            <ItemArchivo key={item.id} style={trail[item.id - 1]} data={item} />
          );
        })}
      </ListaArchivo>
      <Boton onClick={handleClick}>{toggle ? "ver menos" : "ver mas"}</Boton>
    </Contenedor>
  );
};

export default Archivo;
