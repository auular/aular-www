import Link from "next/link";
import { YellowButton } from "../YellowButton";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <h1>Auular</h1>
      </Link>
      <ul className={styles.header__items}>
        <li>Quem somos</li>
        <li>Ajuda</li>
      </ul>
      <div>
        <ul className={styles.header__items}>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <YellowButton value="Cadastre-se" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};
