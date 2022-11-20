import styles from "./FeedbackCard.module.scss";

const FeedbackCard = ({ imgSrc, stars, feedbackText }) => {
  return (
    <div className={styles.feedback_card}>
      <img src={imgSrc} className={styles.feedback_card__client_photo} />
      <div>
        {Array.from({ length: stars }, () => (
            <img src="/images/feedback-star.svg" />
        ))}
      </div>
      <p>{feedbackText}</p>
    </div>
  );
};

export default FeedbackCard;
