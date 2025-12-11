import { useState } from "react";

import styles from "./HeroHeader.module.css";

const HeroHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["background-page"]}>
      <div
        className={
          open ? `${styles["container"]} ${styles.open}` : styles["container"]
        }
      >
        <button className={styles["toggle-btn"]} onClick={() => setOpen(!open)}>
          {open ? "Hide Info" : "Show Info"}
        </button>
        <div
          className={
            open
              ? `${styles["slide-panel"]} ${styles.open}`
              : styles["slide-panel"]
          }
        >
          <div className={styles.panelContent}>
            <h2>Information Panel</h2>
            <p>
              This content slides up from the bottom and covers half of the
              screen. Add anything you want here—text, images, buttons, forms,
              etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
