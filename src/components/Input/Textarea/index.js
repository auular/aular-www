import { useController } from "react-hook-form";
import { DEFAULT_ERROR_MESSAGE } from "..";
import { Error } from "../Error";

import styles from "./Textarea.module.scss";

export const Textarea = ({ name, label, control, errors }) => {
  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
  };

  const { field } = useController({
    name,
    rules,
    control,
  });

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea {...field} rows="5" cols="60" className={styles.textarea} />
      <Error isActive={errors} message={errors?.message} />
    </div>
  );
};
