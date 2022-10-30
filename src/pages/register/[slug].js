import { useRouter } from "next/router";
import Entrepeuner from "./components/Entrepreneur";
import User from "./components/User";

import styles from "./Register.module.scss";

export default function Register() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.slug}>
      <div className={styles.form}>{slug === "user" ? <User /> : <Entrepeuner />}</div>
      <div className={styles.background}>
        <img src="/images/dog-playing.svg" />
      </div>
    </div>
  );
}
