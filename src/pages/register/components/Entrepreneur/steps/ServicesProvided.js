import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

const ServicesProvided = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Input.Name
        label="Name"
        name="blabla_name"
        control={control}
        rules={{ required: true }}
        errors={errors.blabla_name}
      />
    </>
  );
};

export default ServicesProvided;
