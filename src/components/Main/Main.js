import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./board.module.scss";
import update from "immutability-helper";
import {
  BoardWrapper,
  Column,
  Container,
  MenuButton,
  MenuButtons,
  Navbar,
  Profile,
  Search,
  Title,
} from "./mainStyles";

let columns = [
  { id: 1, title: "New Task", status: "new" },
  { id: 2, title: "Scheduled", status: "sch" },
  { id: 3, title: "In Progress", status: "inpr" },
  { id: 4, title: "Completed", status: "compl" },
];

let tasks = [
  { id: 11, label: "Check Email", status: "new" },
  { id: 12, label: "Check Another Email", status: "new" },
  { id: 13, label: "Drink Coffee", status: "sch" },
  { id: 14, label: "Drink Tea", status: "inpr" },
  { id: 15, label: "Buy Milk", status: "inpr" },
  { id: 16, label: "Sell Milk", status: "compl" },
];

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
      <Navbar>
        <MenuButtons>
          <MenuButton>Add New</MenuButton>
          <MenuButton>Kanban</MenuButton>
          <MenuButton>Filter</MenuButton>
        </MenuButtons>
        <Profile>
          <Search />
        </Profile>
      </Navbar>
      <BoardWrapper>
        {columns.map((col) => (
          <Column key={col.id}>
            <Title>{col.title}</Title>
            <DropWrapper
              onDrop={changeTaskStatus}
              status={col.status}
              items={items}
            />
          </Column>
        ))}
      </BoardWrapper>
    </Container>
  );
}

const DropWrapper = ({ onDrop, status, id, items }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(items.filter((el) => el.status === status));
  }, [items, status]);

  // useEffect(() => {}, [])
  const moveItem = (dragIndex, hoverIndex) => {
    const item = tasks[dragIndex];

    setTasks((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);

      newItems.splice(hoverIndex, 0, item);

      return [...newItems];
    });
  };

  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    canDrop: (item, monitor) => {
      const itemIndex = columns.findIndex((col) => col.status === item.status);
      const statusIndex = columns.findIndex((col) => col.status === status);
      return [itemIndex + 1, itemIndex - 1].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(ref);

  if (!tasks) {
    return null;
  }

  return (
    <div style={{ height: "100%" }} ref={ref}>
      {tasks.map((el, idx) => (
        <Item
          key={el?.id}
          item={el}
          label={el?.label}
          moveItem={moveItem}
          index={idx}
        />
      ))}
    </div>
  );
};

const Item = ({ index, item, label, moveItem }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "card",
    canDrop: (item) => {
      const column = columns.find((el) => el.status === item.status);

      return item.status === column.status;
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { ...item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  dragRef(drop(ref));

  if (!item) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={styles.task}
      style={{
        backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
      }}
    >
      {label}
    </div>
  );
};
