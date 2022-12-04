import React, { useEffect, useRef, useState } from "react";
import { columns, tasks } from "../../utils/data";
import { Container, Counter, Header, Title } from "./columnStyles";

import styles from "../Main/board.module.scss";
import DropWrapper from "../DropWrapper/DropWrapper";

export default function Column({
  col,
  changeTaskStatus,
  items,
  newCol,
  title,
}) {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Header>
        <Title newCol={newCol}>{col?.title || title}</Title>
        {!newCol && <Counter>{count}</Counter>}
      </Header>
      {!newCol && (
        <DropWrapper
          onDrop={changeTaskStatus}
          status={col.status}
          items={items}
          title={col.title}
          setCount={setCount}
        />
      )}
    </Container>
  );
}
