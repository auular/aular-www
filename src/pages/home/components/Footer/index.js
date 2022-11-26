import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/"><h3>Auular</h3></Link>
      <h3>Nossos serviços</h3>
      <h3>Seja um colaborador</h3>
      <img src="/images/footer-cat.svg" />
    </footer>
  );
};

export default Footer;
