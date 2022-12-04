import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Dropdown = styled.ul`
  position: absolute;
  margin-top: 10px;
  padding: 12px 20px;
  width: 150px;
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const DropdownItem = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin: 0;
  }
`;

export const Button = styled.a`
  padding: 12px 20px;
  background-color: ${(props) => (props.primary ? "#0094ff" : "#F5F8FA")};
  color: ${(props) => (props.primary ? "#fff" : "#222222")};
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => !props.primary && "#e1e4e7"};
  }
`;

export const Title = styled.span``;
