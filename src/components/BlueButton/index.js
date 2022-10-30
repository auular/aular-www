import React from "react";
import styles from "./BlueButton.module.scss";

export const BlueButton = React.forwardRef(({ onClick, href, value, margin }, ref) => {
  return (
    <button className={styles.button} style={{ margin: `${margin}` }}>
      <a href={href} onClick={onClick} ref={ref}>
        {value}
      </a>
    </button>
  );
});
