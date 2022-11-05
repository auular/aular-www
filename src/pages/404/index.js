import Link from "next/link";
import { YellowButton } from "../../components/YellowButton";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFound__content}>
        <div>
          <h3>Oops! 404</h3>
          <p>Parece que a página que você está procurando não existe</p>
        </div>
        <Link href="/">
          <YellowButton value="Home" />
        </Link>
      </div>
      <div className={styles.notFound__background}>
        <img src="/images/404.svg" />
      </div>
    </main>
  );
}
