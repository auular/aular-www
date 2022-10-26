import { ArrowLeft } from "../../components/ArrowLeft";
import Card from "./components/Card";
import styles from "./Register.module.scss";

export default function Register() {
  const registerType = [
    {
      type: "Usuário",
      description:
        "Crie uma conta de usuário para desfrutar dos serviços disponibilizados pela Auular",
      image: "/images/register-user.svg",
    },
    {
      type: "Empreendedor",
      description:
        "Cadastre seu negócio e conte conosco para alcançar o público amante de pets",
      image: "/images/register-company.svg",
    },
  ];

  return (
    <main className={styles.register}>
      <div className={styles.header}>
        <div style={{ textAlign: "left" }}>
          <ArrowLeft />
        </div>
        <h1>
          Escolha qual o tipo do seu <span>Cadastro</span>
        </h1>
      </div>
      <div className={styles.cards}>
        {registerType.map((item) => (
          <Card
            image={item.image}
            type={item.type}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
