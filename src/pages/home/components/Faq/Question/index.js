import { useState } from "react";
import styles from "./Question.module.scss";

const Question = ({ number, question, answer }) => {
  const [isAnswerActive, setAnswer] = useState(false);

  const contentHeight = isAnswerActive ? "auto" : "";
  const isArrowUp = isAnswerActive ? "rotate(180deg)" : "";

  return (
    <div style={{ height: contentHeight }} className={styles.question}>
      <div className={styles.question__content}>
        <div
          className={styles.question__content__header}
          onClick={() => setAnswer(!isAnswerActive)}
        >
          <span>{number}.</span>
          <p>{question}</p>
        </div>
        <img
          className={styles.question__content__bottom_arrow}
          src="/images/bottom-arrow.svg"
          height={25}
          style={{ cursor: "pointer", transform: isArrowUp }}
          onClick={() => setAnswer(!isAnswerActive)}
          role="button"
        />
      </div>
      <div
        style={{ display: isAnswerActive ? "block" : "none" }}
        className={styles.question__answer}
      >
        <p>{answer}</p>
        <p>
          Caso ainda fique em dúvidas, entenda melhor{" "}
          <span>nossos serviços</span>
        </p>
      </div>
    </div>
  );
};

export default Question;
