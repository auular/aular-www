import React from "react";
import styles from "./BlueButton.module.scss";

export const BlueButton = React.forwardRef(({ onClick, href, value }, ref) => {
  return (
    <button className={styles.button}>
      <a href={href} onClick={onClick} ref={ref}>
        {value}
      </a>
    </button>
  );
});
