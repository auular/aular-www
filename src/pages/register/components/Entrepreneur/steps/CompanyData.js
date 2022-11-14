import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

import styles from "../Entrepreneur.module.scss";

const CompanyData = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const onCEPResult = async (address) => {
    setValue("partner_address", address.logradouro);
    setValue("partner_state", address.uf);
    setValue("partner_city", address.localidade);
    setValue("partner_neighborhood", address.bairro);
  };

  return (
    <div className={styles.company_data}>
      <Input.Name
        label="Nome"
        name="partner_name"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_name}
      />
      <Input.Email
        label="E-mail"
        name="partner_email"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_email}
      />
      <Input.CEP
        label="CEP"
        name="partner_cep"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_cep}
        onResult={onCEPResult}
      />
      <Input.Text
        label="Logradouro"
        name="partner_address"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_address}
      />
      <Input.Text
        label="Estado"
        name="partner_state"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_state}
      />
      <Input.Text
        label="Cidade"
        name="partner_city"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_city}
      />
      <Input.Text
        label="Bairro"
        name="partner_neighborhood"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_neighborhood}
      />
      <Input.Number
        label="Número"
        name="partner_number"
        control={control}
        rules={{ required: true }}
        errors={errors.partner_number}
      />
    </div>
  );
};

export default CompanyData;
