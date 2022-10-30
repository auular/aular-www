import styles from "./User.module.scss";

export const User = () => {
  return (
    <div className={styles.user}>
      <h2>Crie uma conta</h2>
      <label>Nome</label>
      <input />
      <label>E-mail</label>
      <input />
      <label>Senha</label>
      <input />
    </div>
  );
};
