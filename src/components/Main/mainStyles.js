import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MenuButton = styled.a`
  padding: 10px;
`;

const BoardWrapper = styled.main`
  display: flex;
  padding-right: 50px;
  // padding: 20px;
`;

export { MenuButton, Container, BoardWrapper };
