import { useRouter } from "next/router";
import { lazy, Suspense } from "react";

import styles from "./Register.module.scss";

const User = lazy(() => import("./components/User"));
const Entrepreneur = lazy(() => import("./components/Entrepreneur"));

export default function Register() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.slug}>
      <div className={styles.form}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {slug === "user" ? <User /> : <Entrepreneur />}
        </Suspense>
      </div>
      <div className={styles.background}>
        <img src="/images/dog-playing.svg" />
      </div>
    </div>
  );
}
