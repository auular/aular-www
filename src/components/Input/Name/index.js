import { DEFAULT_ERROR_MESSAGE } from "..";
import Input from "../Default/input";

export const Name = ({ name, label, control, errors }) => {
  const INVALID_NAME_ERROR_MESSAGE = "Nome inválido";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^[\p{L} ,.'-]+$/u,
      message: INVALID_NAME_ERROR_MESSAGE,
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
