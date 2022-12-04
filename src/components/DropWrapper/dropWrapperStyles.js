import styled from "styled-components";

export const Container = styled.div.attrs(({ ref }) => ({ ref: ref }))`
  height: 100%;
  border-right: 1px solid #f3f3f3;
  padding: 40px 10px;
  background-color: ${(props) => props.isOver && "#F2F7A1"};
`;

export const ItemContainer = styled.div.attrs(({ ref }) => ({ ref: ref }))`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.completed ? "#B2B2B2" : props.color)};

  opacity: ${(props) => props.completed && "0.4"};
`;

export const Title = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
  text-decoration: ${(props) => props.completed && "line-through"};
`;

export const SubTitle = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;
