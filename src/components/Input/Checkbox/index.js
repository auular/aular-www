import { useState } from "react";
import { useController } from "react-hook-form";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ name, label, control, rules, isBold }) => {
  const [isChecked, setChecked] = useState(false);
  const fontWeight = isBold ? 600 : "normal";

  const { field } = useController({
    name,
    rules,
    control,
  });

  return (
    <div className={styles.checkbox} style={{ fontWeight: fontWeight }}>
      <input
        {...field}
        type="checkbox"
        onClick={() => setChecked(!isChecked)}
      />
      {label}
    </div>
  );
};
