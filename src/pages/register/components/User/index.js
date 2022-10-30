import { BlueButton } from "../../../../components/BlueButton";
import { Checkbox } from "../../../../components/Checkbox";
import styles from "./User.module.scss";

const User = () => {
  const checkboxContent = ["Manter conectado neste dispositivo", "Deseja receber promoções da Auular?"]

  return (
    <div className={styles.user}>
      <h2>Crie uma conta</h2>
      <label>Nome</label>
      <input />
      <label>E-mail</label>
      <input />
      <label>Senha</label>
      <input />
      <div className={styles.checkbox}>
        {checkboxContent.map(content => (
          <Checkbox label={content} isBold={true} />
        ))}
      </div>
      <BlueButton value="Criar conta" margin="10px 0"/>
      <p>Já tem uma conta? <span>Fazer login</span></p> 
    </div>
  );
};

export default User;
