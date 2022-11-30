import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 2px 4px #f0f1f2;
`;

const BoardWrapper = styled.main`
  display: flex;
  padding: 20px;
`;

const MenuButtons = styled.div`
  display: flex;
`;

const MenuButton = styled.a`
  padding: 10px;
`;

const Profile = styled.div`
  display: flex;
`;

const Search = styled.input.attrs((props) => ({
  type: "text",
}))``;

const Column = styled.div`
  flex: 1;
  padding: 15px;
`;

const Title = styled.h3`
  border-bottom: 1px solid red;
  padding-bottom: 15px;
`;

export {
  Navbar,
  MenuButtons,
  MenuButton,
  Container,
  BoardWrapper,
  Profile,
  Search,
  Column,
  Title,
};
