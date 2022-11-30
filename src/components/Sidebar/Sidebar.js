import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { ReactComponent as YourSvg } from "../../assets/svg/bordio-logo.svg";
import { ReactComponent as ProfileImage } from "../../assets/svg/Ellipse.svg";

export default function Sidebar() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <YourSvg />
        </div>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className={styles.title}>
        <ProfileImage
          style={{
            marginRight: 8,
          }}
        />

        <span>My Workspace</span>
      </div>
      <div className={styles.menu}></div>
    </div>
  );
}
