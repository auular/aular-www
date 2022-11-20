import styles from "./Feedback.module.scss";
import FeedbackCard from "./FeedbackCard";
import { feedbacks } from "./feedbacks";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <h2>
        Somos um guia online de hotelaria animal feito pelas opiniões de
        consumidores reais
      </h2>
      <div className={styles.feedback__content}>
        {feedbacks.map(({ imgSrc, stars, feedbackText }) => (
          <FeedbackCard
            imgSrc={imgSrc}
            stars={stars}
            feedbackText={feedbackText}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
