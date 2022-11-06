import styles from "./Shadow.module.scss";

const Shadow = () => {
  return (
    <div className={styles.shadow}>
      <img className={styles.shadow__img} src="/images/man-with-dog.svg" />
      <img className={styles.shadow__yellow} src="/images/yellow-shadow.svg" />
      <img className={styles.shadow__blue} src="/images/blue-shadow.svg" />
    </div>
  );
};

export default Shadow;
