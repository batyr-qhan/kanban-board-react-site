import React, { useState } from "react";
import styles from "./extrasidebar.module.scss";
import classNames from "classnames";

import {
  IoMapOutline,
  IoCalendarNumberOutline,
  IoCheckboxOutline,
  IoBookmarkOutline,
  IoFileTrayOutline,
} from "react-icons/io5";

let items = [
  {
    id: 0,
    title: "Roadmap",
    icon: <IoMapOutline size={24} />,
    iconActive: <IoMapOutline size={24} color="#0094FF" />,
  },
  {
    id: 1,
    title: "Schedule",
    icon: <IoCalendarNumberOutline size={24} />,
    iconActive: <IoCalendarNumberOutline size={24} color="#0094ff" />,
  },
  {
    id: 2,
    title: "Tasks",
    icon: <IoCheckboxOutline size={24} />,
    iconActive: <IoCheckboxOutline size={24} color="#0094ff" />,
  },
  {
    id: 3,
    title: "Notes",
    icon: <IoBookmarkOutline size={24} />,
    iconActive: <IoBookmarkOutline size={24} color="#0094ff" />,
  },
  {
    id: 4,
    title: "Files",
    icon: <IoFileTrayOutline size={24} />,
    iconActive: <IoFileTrayOutline size={24} color="#0094ff" />,
  },
];

export default function ExtraSidebar() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={styles.extrasidebar}>
      <div className={styles.header}>Tools</div>
      <ul className={styles.list}>
        {items.map((el) => (
          <Item
            id={el.id}
            icon={el.icon}
            title={el.title}
            iconActive={el.iconActive}
            active={el.id === activeItem}
            onItemClick={setActiveItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ id, active, icon, iconActive, title, onItemClick }) {
  return (
    <li
      className={classNames(styles.item, { [styles.active]: active })}
      onClick={() => {
        onItemClick(id);
      }}
    >
      <div />

      <div className={styles.content}>
        <div className={styles.iconContainer}>
          {" "}
          {active ? iconActive : icon}
        </div>
        <span>{title}</span>
      </div>
    </li>
  );
}
