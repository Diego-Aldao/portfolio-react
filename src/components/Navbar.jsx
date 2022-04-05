import styled, { keyframes } from "styled-components";

const animacion = keyframes`
    0% { width: 50% ;}
    50% { width: 75%;}
    100% { width: 50%;}
`;

const Navegacion = styled.nav`
  width: 100%;
  padding: 25px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  width: 50px;
  height: 50px;
  color: var(--color-principal);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-principal);
`;
const Hamburguesa = styled.span`
  width: 50px;
  height: 50px;
  padding: 10px;
  color: var(--color-principal);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  span {
    width: 100%;
    height: 2px;
    background: var(--color-principal);
    margin-bottom: 5px;
  }
`;
const SpanAnimado = styled.span`
  width: 50%;
  animation: ${animacion} 0.3s infinite ease-in-out;
`;

const Navbar = () => {
  return (
    <Navegacion>
      <Logo></Logo>
      <Hamburguesa>
        <span></span>
        <SpanAnimado></SpanAnimado>
        <span></span>
      </Hamburguesa>
    </Navegacion>
  );
};

export default Navbar;
