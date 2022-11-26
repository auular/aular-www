import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

const HotelDescription = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Input.Text
      label="Insira uma descrição para seu hotel"
      name="hotel.description"
      control={control}
      rules={{ required: true }}
      errors={errors?.hotel?.description}
    />
  );
};

export default HotelDescription;
