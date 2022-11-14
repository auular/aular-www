import { DEFAULT_ERROR_MESSAGE } from "..";
import Input from "../Default/input";

export const Text = ({ name, label, control, errors }) => {
  const INVALID_EMAIL_ERROR_MESSAGE = "Por favor, insira apenas texto";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
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
