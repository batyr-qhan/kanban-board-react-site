import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  border-bottom: 1px solid #f3f3f3;
  padding: 25px 15px 15px 15px;
  display: flex;
  justify-content: center;
  height: 65px;
`;

export const Title = styled.h4`
  align-self: center;
  color: #222222;
  margin-right: 8px;
  opacity: ${(props) => props.newCol && "0.5"};
  font-weight: ${(props) => (props.newCol ? "normal" : "bold")};
`;

export const Counter = styled.div`
  border-radius: 50px;
  background-color: #e8ebef;
  padding: 2px 10px;
  color: #8c939f;
`;
