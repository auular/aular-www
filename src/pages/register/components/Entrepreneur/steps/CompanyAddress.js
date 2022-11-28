import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";

import styles from "../Entrepreneur.module.scss";

const CompanyAddress = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const onCEPResult = async (address) => {
    setValue("address.addressStreet", address.logradouro);
    setValue("address.addressState", address.uf);
    setValue("address.addressCity", address.localidade);
    setValue("address.addressDistrict", address.bairro);
  };

  return (
    <div className={styles.company_address}>
      <Input.CEP
        label="CEP"
        name="address.addressCode"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressCode}
        onResult={onCEPResult}
      />
      <Input.Text
        label="Logradouro"
        name="address.addressStreet"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressStreet}
      />
      <Input.Text
        label="Estado"
        name="address.addressState"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressState}
      />
      <Input.Text
        label="Cidade"
        name="address.addressCity"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressCity}
      />
      <Input.Text
        label="Bairro"
        name="address.addressDistrict"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressDistrict}
      />
      <Input.Number
        label="Número"
        name="address.addressNumber"
        control={control}
        rules={{ required: true }}
        errors={errors.address?.addressNumber}
      />
    </div>
  );
};

export default CompanyAddress;
