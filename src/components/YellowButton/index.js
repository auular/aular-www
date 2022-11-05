import React from "react";
import styles from "./YellowButton.module.scss";

export const YellowButton = React.forwardRef(
  ({ onClick, href, value, margin, type }, ref) => {
    return (
      <button
        className={styles.button}
        style={{ margin: `${margin}` }}
        type={type}
        onClick={onClick}
      >
        <a href={href} ref={ref}>
          {value}
        </a>
      </button>
    );
  }
);
