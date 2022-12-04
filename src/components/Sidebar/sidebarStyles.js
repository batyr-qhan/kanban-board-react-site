import styled from "styled-components";

export const Container = styled.section`
  width: 220px;
  background-color: #0f1d40;
  height: 100%;
`;

export const Header = styled.div`
  padding: 20px 16px;
`;
export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 4px;
  height: 30px;
  background-color: #2d4071;
  padding: 8px;
  color: #fff;
`;

export const Title = styled.div`
  background-color: #2d4071;
  color: #fff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  padding: 16px;
`;

export const Item = styled.li`
  cursor: pointer;
  margin: 16px 0;
`;

export const ItemTitleContainer = styled.div`
  color: #fff;
  font-size: 1rem;
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ItemTitle = styled.span``;

export const NestedMenu = styled.ul``;

export const NestedItem = styled.li`
  margin: 16px 0;
  color: #8c939f;
  font-size: 1rem;
`;
