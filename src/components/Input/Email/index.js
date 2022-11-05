import { DEFAULT_ERROR_MESSAGE } from "..";
import Input from "../Default/input";

export const Email = ({ name, label, control, errors }) => {
  const INVALID_EMAIL_ERROR_MESSAGE = "Email inválido";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: INVALID_EMAIL_ERROR_MESSAGE,
    },
  };

  return (
    <Input
      name={name}
      label={label}
      rules={rules}
      control={control}
      errors={errors}
    />
  );
};
