import { Header } from "../../components/Header";
import { BlueButton } from "../../components/BlueButton";
import Shadow from "./components/Shadow";
import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__container}>
        <div className={styles.home__hero}>
          <div className={styles.home__hero_content}>
            <h1>Vai viajar e não sabe com quem deixar seu pet?</h1>
            <p>
              Para nós do AuuLar, o bem-estar do seu pet vem sempre em <span>primeiro
              lugar.</span>
            </p>
            <Link href="/register/user">
              <BlueButton value="Cadastre-se" />
            </Link>
          </div>
          <Shadow />
        </div>
      </div>
    </div>
  );
}
