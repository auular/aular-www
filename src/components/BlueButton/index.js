import React from "react";
import styles from "./BlueButton.module.scss";

export const BlueButton = React.forwardRef(
  ({ onClick, href, value, margin, type, isActive }, ref) => {
    return (
      <button
        className={styles.button}
        style={{ margin: margin }}
        type={type}
        onClick={onClick}
        disabled={isActive}
      >
        <a href={href} ref={ref}>
          {value}
        </a>
      </button>
    );
  }
);
