import { useForm } from "react-hook-form";
import { BlueButton } from "../../../../components/BlueButton";
import Input from "../../../../components/Input";
import styles from "./User.module.scss";

const User = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => console.log(data);

  const checkboxContent = [
    {
      content: "Manter conectado neste dispositivo",
      slug: "stay_connected",
    },
    {
      content: "Deseja receber promoções da Auular?",
      slug: "receive_promo",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.user}>
        <h2>Crie uma conta</h2>
        <Input.Name
          label="Nome"
          name="user_name"
          control={control}
          rules={{ required: true }}
          errors={errors.user_name}
        />
        <Input.Email
          label="E-mail"
          name="user_email"
          control={control}
          rules={{ required: true }}
          errors={errors.user_email}
        />
        <Input.Password
          label="Senha"
          name="user_password"
          control={control}
          rules={{ required: true }}
          errors={errors.user_password}
        />
        <div className={styles.user__checkbox}>
          {checkboxContent.map((checkbox) => (
            <Input.Checkbox
              key={checkbox.slug}
              name={checkbox["slug"]}
              label={checkbox.content}
              control={control}
              rules={{ required: false }}
              isBold={true}
            />
          ))}
        </div>
        <BlueButton value="Criar conta" margin="10px 0" type="submit" />
        <p>
          Já tem uma conta? <span>Fazer login</span>
        </p>
      </div>
    </form>
  );
};

export default User;
