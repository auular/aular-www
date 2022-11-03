import Input from "../Default/input";

export const Name = ({ name, label, control, errors }) => {
  const ERROR_MESSAGE = "Preencha este campo";
  const rules = {
    required: ERROR_MESSAGE,
    pattern: {
      value: /^[\p{L} ,.'-]+$/u,
      message: "Nome inválido",
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
