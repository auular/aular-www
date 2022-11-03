import React from "react";
import { useController } from "react-hook-form";
import styles from "./Input.module.scss";

const Input = ({ name, label, control, rules, errors }) => {
  const { field } = useController({
    name,
    rules,
    control,
  });

  return (
    <div className={styles.default}>
      <label htmlFor={name}>{label}</label>
      <input {...field} className={styles.input} />
      <span>{errors && rules.required}</span>
    </div>
  );
};

export default Input;
