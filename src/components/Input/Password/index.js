import { DEFAULT_ERROR_MESSAGE } from "..";
import Input from "../Default/input";

export const Password = ({ name, label, control, errors }) => {
  const INVALID_PASSWORD_ERROR_MESSAGE =
    "Senha inválida. Por favor preencha pelo menos 8 caracteres";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^(?=.*\d).{8,}$/,
      message: INVALID_PASSWORD_ERROR_MESSAGE,
    },
  };

  return (
    <Input
      name={name}
      label={label}
      rules={rules}
      control={control}
      errors={errors}
      type="password"
    />
  );
};
