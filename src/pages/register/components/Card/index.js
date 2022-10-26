import { BlueButton } from "../../../../components/BlueButton";
import styles from "./Card.module.scss";

export default function Card({ image, type, description }) {
  return (
    <div className={styles.card}>
      <img src={image} />
      <h3>{type}</h3>
      <p>{description}</p>
      <div>
        <BlueButton value="Cadastre-se" />
      </div>
    </div>
  );
}
