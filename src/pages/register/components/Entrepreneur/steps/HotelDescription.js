import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

const HotelDescription = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <p>Insira uma descrição para seu hotel</p>
      <Input.Text
        label=""
        name="hotel_description"
        control={control}
        rules={{ required: true }}
        errors={errors.hotel_description}
      />
    </label>
  );
};

export default HotelDescription;
