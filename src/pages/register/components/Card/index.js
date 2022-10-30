import Link from "next/link";
import { BlueButton } from "../../../../components/BlueButton";

import styles from "./Card.module.scss";

export function Card({ image, type, description, slug }) {
  return (
    <div className={styles.card}>
      <img src={image} />
      <h3>{type}</h3>
      <p>{description}</p>
      <div>
        <Link href={`/register/${slug}`} passHref legacyBehavior>
          <BlueButton value="Cadastre-se" />
        </Link>
      </div>
    </div>
  );
}
