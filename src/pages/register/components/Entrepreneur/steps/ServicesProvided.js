import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";
import { averagePrice, petsAccepted, serviceOptions } from "../checkbox";

import styles from "../Entrepreneur.module.scss";

const ServicesProvided = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.services_provided}>
      <div className={styles.services_provided__input_number}>
        <Input.Number
          label="Nº de hóspedes"
          name="guests_number"
          control={control}
          rules={{ required: true }}
          errors={errors.guests_number}
        />
        <Input.Number
          label="Nº de quartos"
          name="rooms_quantity"
          control={control}
          rules={{ required: true }}
          errors={errors.rooms_quantity}
        />
      </div>
      <div className={styles.services_provided__average_price}>
        <label>Custo médio por hospedagem</label>
        <div className={styles.services_provided__average_price__content}>
          {averagePrice.map((checkbox) => (
            <Input.Checkbox
              key={checkbox.slug}
              name={checkbox["slug"]}
              label={checkbox.content}
              control={control}
              rules={{ required: false }}
            />
          ))}
        </div>
      </div>
      <label>Serviços prestados</label>
      <div className={styles.services_provided__options}>
        {serviceOptions.map((checkbox) => (
          <Input.Checkbox
            key={checkbox.slug}
            name={checkbox["slug"]}
            label={checkbox.content}
            control={control}
            rules={{ required: false }}
          />
        ))}
      </div>
      <label>Pets aceitos</label>
      <div className={styles.services_provided__pets_accepted}>
        {petsAccepted.map((checkbox) => (
          <Input.Checkbox
            key={checkbox.slug}
            name={checkbox["slug"]}
            label={checkbox.content}
            control={control}
            rules={{ required: false }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesProvided;
