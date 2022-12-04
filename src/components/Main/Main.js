import React, { useEffect, useRef, useState } from "react";
import { columns, tasks } from "../../utils/data";
import Column from "../Column/Column";
import Navbar from "../Navbar/Navbar";
// import update from "immutability-helper";
import { BoardWrapper, Container } from "./mainStyles";

export default function Main() {
  const [items, setItems] = useState(tasks);

  const changeTaskStatus = (item, monitor, status) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((el, idx) => el.id !== item.id)
        .concat({ ...item, status });
      return [...newItems];
    });
  };
  return (
    <Container>
      <Navbar />
      <BoardWrapper>
        {columns.map((col) => (
          <Column
            key={col.id}
            col={col}
            columns={columns}
            changeTaskStatus={changeTaskStatus}
            items={items}
          />
        ))}
        <Column newCol title="+ Create Status" />
      </BoardWrapper>
    </Container>
  );
}
