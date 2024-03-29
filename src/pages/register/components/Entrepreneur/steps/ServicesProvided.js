import { useFormContext } from "react-hook-form";
import Input from "../../../../../components/Input";
import { averagePrice, petsAccepted, serviceOptions } from "../checkbox";

import styles from "../Entrepreneur.module.scss";

const ServicesProvided = () => {
  const {
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();

  const isAtLeastOneChecked = () => {
    const services = getValues("servicesProvided");

    const checkeds = serviceOptions.filter(({ slug }) => {
      return services[slug] === true;
    });

    return checkeds.length >= 1;
  };

  const isOnlyOneChecked = () => {
    const prices = getValues("averagePrice");

    const checkeds = averagePrice.filter(({ slug }) => {
      return prices[slug] === true;
    });

    return checkeds.length === 1;
  };

  return (
    <div className={styles.services_provided}>
      <div className={styles.services_provided__input_number}>
        <Input.Number
          label="Nº de hóspedes"
          name="servicesProvided.guestsNumber"
          control={control}
          rules={{ required: true }}
          errors={errors.servicesProvided?.guestsNumber}
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
              name={`averagePrice.${checkbox["slug"]}`}
              label={checkbox.content}
              control={control}
              rules={{
                validate: isOnlyOneChecked,
              }}
            />
          ))}
        </div>
      </div>
      <label>Serviços prestados</label>
      <div className={styles.services_provided__options}>
        {serviceOptions.map((checkbox) => (
          <Input.Checkbox
            key={checkbox.slug}
            name={`servicesProvided.${checkbox["slug"]}`}
            label={checkbox.content}
            control={control}
            rules={{ validate: isAtLeastOneChecked }}
          />
        ))}
      </div>
      <label>Pets aceitos</label>
      <div className={styles.services_provided__pets_accepted}>
        {petsAccepted.map((checkbox) => (
          <Input.Checkbox
            key={checkbox.slug}
            name={`servicesProvided.${checkbox["slug"]}`}
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
