import { useEffect } from "react";
import { useController } from "react-hook-form";
import { DEFAULT_ERROR_MESSAGE } from "..";
import useViaCEP from "../../../services/viacep";
import Input from "../Default/input";
import { isValidCEP } from "./validator";

export const CEP = ({ name, label, onResult, control, errors }) => {
  const INVALID_EMAIL_ERROR_MESSAGE = "CEP inválido";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value: /^[0-9]{5}[0-9]{3}$/,
      message: INVALID_EMAIL_ERROR_MESSAGE,
    },
  };

  const { field } = useController({
    name,
    rules,
    control,
  });

  useEffect(() => {
    if (isValidCEP(field.value)) {
      useViaCEP(field.value)
        .then((res) => onResult(res.data))
        .catch((err) => console.log(err));
    }
  }, [field.value]);

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
