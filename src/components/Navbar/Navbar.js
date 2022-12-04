import React, { useState } from "react";
import Input from "../shared/Input/Input";
import NavbarButton from "../shared/NavbarButton/NavbarButton";
import Notification from "../shared/Notification/Notification";
import {
  BtnContainer,
  ButtonsWrapper,
  Container,
  NavbarSection,
  RightSection,
} from "./navbarStyles";

import { ReactComponent as ProfileImage } from "../../assets/svg/Ellipse.svg";
import { kanbanBtnOptions } from "../../utils/data";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <ButtonsWrapper>
        <BtnContainer>
          <NavbarButton title="Add new" primary={true} />
        </BtnContainer>
        <BtnContainer>
          <NavbarButton title="Kanban" options={kanbanBtnOptions} />
        </BtnContainer>
        <BtnContainer>
          <NavbarButton title="Filter" />
        </BtnContainer>
      </ButtonsWrapper>
      <RightSection>
        <NavbarSection>
          <Input value={inputValue} onChange={setInputValue} />
        </NavbarSection>

        <NavbarSection>
          <Notification />
        </NavbarSection>

        <NavbarSection>
          <ProfileImage style={{ height: 40, width: 40 }} />
        </NavbarSection>
      </RightSection>
    </Container>
  );
}
