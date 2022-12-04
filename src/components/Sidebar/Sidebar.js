import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as YourSvg } from "../../assets/svg/bordio-logo.svg";
import { ReactComponent as ProfileImage } from "../../assets/svg/Ellipse.svg";
import {
  Container,
  Header,
  Item,
  ItemTitle,
  ItemTitleContainer,
  Logo,
  Menu,
  NestedItem,
  NestedMenu,
  Title,
} from "./sidebarStyles";

import { IoAdd, IoChevronDown, IoChevronUp } from "react-icons/io5";
import DarkInput from "../shared/DarkInput/DarkInput";
import { menuItems } from "../../utils/data";

export default function Sidebar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Header>
        <Logo>
          <YourSvg />
        </Logo>
        <DarkInput value={inputValue} onChange={setInputValue} />
      </Header>
      <Title className={styles.title}>
        <ProfileImage
          style={{
            marginRight: 8,
          }}
        />

        <span>My Workspace</span>
      </Title>
      <Menu>
        {menuItems.map((el) => (
          <ListItem
            key={el.id}
            title={el.title}
            items={el.nestedItems}
            addBtn={el.addBtn}
          />
        ))}
      </Menu>
    </Container>
  );
}

function ListItem({ title, items, addBtn }) {
  const [showNested, setShowNested] = useState(false);

  return (
    <Item
      onClick={() => {
        setShowNested((prev) => !prev);
      }}
    >
      <ItemTitleContainer>
        {showNested ? (
          <IoChevronUp style={{ marginRight: 8 }} />
        ) : (
          <IoChevronDown style={{ marginRight: 8 }} />
        )}
        <ItemTitle>{title}</ItemTitle>
        {addBtn && (
          <IoAdd style={{ position: "absolute", right: 8, top: "auto" }} />
        )}
      </ItemTitleContainer>
      {showNested && items && (
        <NestedMenu>
          {items.map((el) => (
            <NestedItem>{el.title}</NestedItem>
          ))}
        </NestedMenu>
      )}
    </Item>
  );
}
