import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  background-color: var(--light-navy);
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 35px;
  div {
    width: 40px;
    height: 100%;
  }
`;
const ItemTitulo = styled.h3`
  color: var(--lightest-slate);
  font-size: 20px;
  line-height: 1.3;
`;

const ItemDescripcion = styled.p`
  color: var(--light-slate);
  font-size: 14px;
`;

const ItemTecno = styled.ul`
  display: flex;
  margin-top: 20px;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  li {
    margin-right: 15px;
    font-family: var(--fuente-mono);
    font-size: 13px;
    line-height: 1.75;
    text-transform: capitalize;
  }
`;

const ItemArchivo = () => {
  return (
    <Item>
      <ItemHead>
        <div>a</div>
        <div>l</div>
      </ItemHead>
      <ItemTitulo>
        Lorem, ipsum dolor sit amet consectetur adipisicing.
      </ItemTitulo>
      <ItemDescripcion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        perspiciatis nostrum soluta.
      </ItemDescripcion>
      <ItemTecno>
        <li>javascript</li>
        <li>sql</li>
        <li>react</li>
      </ItemTecno>
    </Item>
  );
};

export default ItemArchivo;
