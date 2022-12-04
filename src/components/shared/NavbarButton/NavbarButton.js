import React, { useState } from "react";
import { IoAdd, IoChevronDown, IoChevronUp } from "react-icons/io5";
import {
  Button,
  Dropdown,
  DropdownItem,
  Wrapper,
  Title,
} from "./navbarButtonStyles";

export default function NavbarButton({ title, primary, options }) {
  const [dropdownShown, setDropdownShown] = useState(false);

  const Icon = dropdownShown ? (
    <IoChevronUp color="#8C939F" style={{ marginLeft: 10 }} />
  ) : (
    <IoChevronDown color="#8C939F" style={{ marginLeft: 10 }} />
  );

  return (
    <Wrapper>
      <Button
        primary={primary}
        onClick={() => {
          setDropdownShown((prev) => !prev);
        }}
      >
        {primary && <IoAdd size={18} style={{ marginRight: 10 }} />}
        <Title>{title}</Title>

        {!primary && Icon}
      </Button>
      {dropdownShown && options && (
        <Dropdown>
          {options.map((el) => (
            <DropdownItem key={el.id}>{el.title}</DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}
