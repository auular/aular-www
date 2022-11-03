import { useForm } from "react-hook-form";
import { BlueButton } from "../../../../components/BlueButton";
import { Checkbox } from "../../../../components/Checkbox";
import Input from "../../../../components/Input";
import styles from "./User.module.scss";

const User = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
  });

  const handleRegistration = (data) => console.log(data);

  const checkboxContent = [
    "Manter conectado neste dispositivo",
    "Deseja receber promoções da Auular?",
  ];

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className={styles.user}>
        <h2>Crie uma conta</h2>
        <Input.Name
          label="Name"
          name="completeName"
          control={control}
          rules={{ required: true }}
          errors={errors.completeName}
        />
        <div className={styles.checkbox}>
          {checkboxContent.map((content) => (
            <Checkbox label={content} isBold={true} />
          ))}
        </div>
        <BlueButton value="Criar conta" margin="10px 0" />
        <p>
          Já tem uma conta? <span>Fazer login</span>
        </p>
      </div>
    </form>
  );
};

export default User;
