import Image from "next/image";
import { useState } from "react";
import styles from "./Question.module.scss";

const Question = ({ number, question, answer }) => {
  const [isAnswerActive, setAnswer] = useState(false);

  const contentHeight = isAnswerActive ? "auto" : "";

  return (
    <div
      style={{ height: contentHeight }}
      className={styles.question}
      onClick={() => setAnswer(!isAnswerActive)}
    >
      <div className={styles.question__content}>
        <div className={styles.question__content__header}>
          <span>{number}.</span>
          <p>{question}</p>
        </div>
        <Image
          src="/images/bottom-arrow.svg"
          width={30}
          height={25}
          style={{ cursor: "pointer" }}
          onClick={() => setAnswer(!isAnswerActive)}
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
