import styles from "./Error.module.scss";

export const Error = ({ isActive, message }) => {
  return <div className={styles.error}>{isActive && <p>{message}</p>}</div>;
};
