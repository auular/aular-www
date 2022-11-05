import { useController } from "react-hook-form";
import { Error } from "../Error";
import styles from "./Input.module.scss";

const Input = ({ name, label, control, rules, errors, type }) => {
  const { field } = useController({
    name,
    rules,
    control,
  });

  return (
    <div className={styles.default}>
      <label htmlFor={name}>{label}</label>
      <input {...field} type={type} className={styles.input} />
      <Error isActive={errors} message={errors?.message} />
    </div>
  );
};

export default Input;
