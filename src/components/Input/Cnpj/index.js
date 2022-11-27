import { useEffect } from "react";
import { useController } from "react-hook-form";
import { DEFAULT_ERROR_MESSAGE } from "..";
import useCNPJ from "../../../services/cnpj";
import Input from "../Default/input";

export const CNPJ = ({ name, label, onResult, control, errors }) => {
  const INVALID_EMAIL_ERROR_MESSAGE = "CNPJ inválido";

  const rules = {
    required: DEFAULT_ERROR_MESSAGE,
    pattern: {
      value:
        /^(\d{3})\.?(\d{3})\.?(\d{3})\-?(\d{2}$)$|^(\d{2})\.?(\d{3})\.?(\d{3})\/?([0-1]{4})\-?(\d{2})$/,
      message: INVALID_EMAIL_ERROR_MESSAGE,
    },
  };

  const { field } = useController({
    name,
    rules,
    control,
  });

  useEffect(() => {
    useCNPJ(field.value)
      .then((res) => onResult(res))
      .catch((err) => console.log(err));
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
