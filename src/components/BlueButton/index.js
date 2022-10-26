import styles from "./BlueButton.module.scss";

export function BlueButton({ value }) {
  return <button className={styles.button}>{value}</button>;
}
