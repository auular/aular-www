import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

import styles from "../Entrepreneur.module.scss";

const CompanyData = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.company_data}>
      <Input.Name
        label="Nome"
        name="hotel.name"
        control={control}
        rules={{ required: true }}
        errors={errors.hotel?.name}
      />
      <Input.Email
        label="E-mail"
        name="hotel.email"
        control={control}
        rules={{ required: true }}
        errors={errors?.hotel?.email}
      />
      <Input.Number
        label="Telefone"
        name="hotel.phoneNumber"
        control={control}
        rules={{ required: true }}
        errors={errors?.hotel?.phoneNumber}
      />
      <Input.Password
        label="Senha"
        name="hotel.password"
        control={control}
        rules={{ required: true }}
        errors={errors?.hotel?.password}
      />
      <Input.Number
        label="Senha"
        name="hotel.password"
        control={control}
        rules={{ required: true }}
        errors={errors?.hotel?.password}
      />
    </div>
  );
};

export default CompanyData;
