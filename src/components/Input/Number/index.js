import { DEFAULT_ERROR_MESSAGE } from "..";
import Input from "../Default/input";

export const Number = ({ name, label, control, errors }) => {
  const INVALID_NUMBER_ERROR_MESSAGE = "Por favor, insira apenas números";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^[0-9]*$/,
      message: INVALID_NUMBER_ERROR_MESSAGE,
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
