import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

import styles from "../Entrepreneur.module.scss";

const CompanyData = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const onCNPJResult = ({ nome_fantasia, ddd_telefone_1, cep }) => {
    setValue("hotel.name", nome_fantasia);
    setValue("hotel.phoneNumber", ddd_telefone_1);
  };

  return (
    <div className={styles.company_data}>
      <Input.CNPJ
        label="CNPJ"
        name="hotel.documentId"
        control={control}
        onResult={onCNPJResult}
        rules={{ required: true }}
        errors={errors.hotel?.documentId}
      />
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
    </div>
  );
};

export default CompanyData;
