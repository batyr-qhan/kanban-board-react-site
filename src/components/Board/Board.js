import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./board.module.scss";
import update from "immutability-helper";

let columns = [
  { id: 0, title: "New Task", status: "new" },
  { id: 1, title: "Scheduled", status: "sch" },
  { id: 2, title: "In Progress", status: "inpr" },
  { id: 3, title: "Completed", status: "compl" },
];

let tasks = [
  { id: 0, label: "Check Email", status: "new" },
  { id: 1, label: "Check Another Email", status: "new" },
  { id: 2, label: "Drink Coffee", status: "sch" },
  { id: 3, label: "Drink Tea", status: "inpr" },
  { id: 4, label: "Buy Milk", status: "inpr" },
  { id: 5, label: "Sell Milk", status: "compl" },
];

export default function Board() {
  const [items, setItems] = useState(tasks);

  const changeTaskStatus = (id, status) => {
    // const mapping = columns.find((col) => col.status === status);

    console.log("eitwioeuoi");

    let task = tasks.find((task) => task.id === id);
    const taskIndex = tasks.findIndex(function (el) {
      return el.id === task.id;
    });
    console.log(task, taskIndex, status);
    task = { ...task, status };
    console.log("its task", task);
    // let newTasks = update(tasks, {
    //   [taskIndex]: { $set: task },
    // });
    // setItems(newTasks);

    setItems((prevState) => {
      console.log(prevState);
      const newItems = prevState
        .filter((el, idx) => el.id !== taskIndex)
        .concat({ ...task, status });
      return [...newItems];
    });

    // setItems((prevState) => {
    //   const newItems = prevState
    //     .filter((i) => i.id !== item.id)
    //     .concat({ ...item, status });
    //   return [...newItems];
    // });
  };

  // const moveItem = (dragIndex, hoverIndex) => {
  //   const item = items[dragIndex];
  //   setItems((prevState) => {
  //     const newItems = prevState.filter((i, idx) => idx !== dragIndex);
  //     newItems.splice(hoverIndex, 0, item);
  //     return [...newItems];
  //   });
  // };

  return (
    <div className={styles.board}>
      {columns.map((el) => (
        <div key={el.id} className={styles.column}>
          <div>{el.title}</div>
          <DropWrapper onDrop={changeTaskStatus} status={el.status}>
            {items
              .filter((tsk) => tsk.status === el.status)
              .map((task, idx) => (
                <Item
                  key={task.id}
                  id={task.id}
                  index={idx}
                  item={task}
                  label={task.label}
                  // moveItem={moveItem}
                />
              ))}
          </DropWrapper>
        </div>
      ))}
    </div>
  );
}

const DropWrapper = ({ onDrop, children, status, id }) => {
  const ref = useRef(null);

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    // canDrop: (item, monitor) => {
    //   const itemIndex = statuses.findIndex((si) => si.status === item.status);
    //   const statusIndex = statuses.findIndex((si) => si.status === status);
    //   return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    // },
    drop: (item) => {
      console.log("iooiioioio");
      onDrop(item.id, status);
    },
    // collect: (monitor) => ({
    //   isOver: monitor.isOver(),
    // }),
  });

  drop(ref);

  return (
    <div style={{ height: "100%" }} ref={ref}>
      {children}
    </div>
  );
};

const Item = ({ id, index, label, moveItem, item }) => {
  const ref = useRef(null);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // const [{ isOver }, dropRef] = useDrop(() => ({
  //   accept: "card",
  //   // drop: () => moveItem(id),
  //   hover(item, monitor) {
  //     if (!ref.current) {
  //       return;
  //     }
  //     const dragIndex = item.index;
  //     const hoverIndex = index;

  //     if (dragIndex === hoverIndex) {
  //       return;
  //     }

  //     const hoveredRect = ref.current.getBoundingClientRect();
  //     const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
  //     const mousePosition = monitor.getClientOffset();
  //     const hoverClientY = mousePosition.y - hoveredRect.top;

  //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //       return;
  //     }

  //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //       return;
  //     }
  //     moveItem(dragIndex, hoverIndex);
  //     item.index = hoverIndex;
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //   }),
  // }));

  dragRef(ref);

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
