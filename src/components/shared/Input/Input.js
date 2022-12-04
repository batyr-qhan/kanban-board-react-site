import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Container, Icon, InputStyled } from "./inputStyles";

export default function Input({ onChange, value }) {
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
