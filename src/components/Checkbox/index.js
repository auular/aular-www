import { useState } from "react";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ label, isBold }) => {
  const [isChecked, setChecked] = useState(false);
  const fontWeight = isBold ? 600 : "normal";

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={styles.checkbox} style={{ fontWeight: `${fontWeight}` }}>
      <input type="checkbox" onClick={handleCheck} />
      {label}
    </div>
  );
};
