import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Container, Icon, InputStyled } from "./darkInputStyles";

export default function DarkInput({ value, onChange }) {
  return (
    <Container>
      <InputStyled
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      <Icon>
        <IoSearchOutline size={18} color="#8C939F" />
      </Icon>
    </Container>
  );
}
