import Card from "./components/Card";
import styles from "./Register.module.scss";

export default function Register() {
  const registerType = [
    {
      type: "Usuário",
      description:
        "Crie uma conta de usuário para desfrutar dos serviços disponibilizados pela Auular",
    },
    {
      type: "Usuário",
      description:
        "Crie uma conta de usuário para desfrutar dos serviços disponibilizados pela Auular",
    },
  ];

  return (
    <main className={styles.register}>
      <h1>Escolha qual o tipo do seu Cadastro</h1>
      {registerType.map(item => (
        <Card type={item.type} description={item.description}/>
      ))}
    </main>
  );
}
