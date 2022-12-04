import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Badge, Container } from "./notificationStyles";

export default function Notification() {
  return (
    <Container>
      <Badge>99+</Badge>
      <IoNotificationsOutline size={24} color="#8C939F" />
    </Container>
  );
}
