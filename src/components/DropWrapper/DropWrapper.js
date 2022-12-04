import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { columns, tasks } from "../../utils/data";

import { Container, ItemContainer, SubTitle, Title } from "./dropWrapperStyles";

export default function DropWrapper({ onDrop, status, items, setCount }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(items.filter((el) => el.status === status));
  }, [items, status]);

  useEffect(() => {
    setCount(tasks.length);
  }, [setCount, tasks]);

  // useEffect(() => {}, [])
  const moveItem = (dragIndex, hoverIndex) => {
    const item = tasks[dragIndex];

    console.log(item);

    console.log("this is hover", hoverIndex);

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
      return ![itemIndex].includes(statusIndex);
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
    <Container ref={ref} isOver={isOver}>
      {tasks.map((el, idx) => (
        <Item
          key={el?.id}
          item={el}
          label={el?.label}
          moveItem={moveItem}
          index={idx}
          timeToComplete={el?.timeToComplete}
          status={el?.status}
          color={el?.color}
        />
      ))}
    </Container>
  );
}

const Item = ({
  index,
  item,
  label,
  moveItem,
  timeToComplete,
  status,
  color,
}) => {
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

      console.log(dragIndex, hoverIndex);

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

  //   console.log(status)
  return (
    <ItemContainer
      completed={status === "compl"}
      ref={ref}
      color={color}
      //   className={styles.task}
      style={{
        backgroundColor: isDragging && "#fbb",
      }}
    >
      <Title completed={status === "compl"}>{label}</Title>
      <SubTitle>{timeToComplete}</SubTitle>
    </ItemContainer>
  );
};
