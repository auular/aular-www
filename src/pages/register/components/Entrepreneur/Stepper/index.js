import { steps } from "../steps";
import { useStepRegister } from "../useStepRegister";
import styles from "./Stepper.module.scss";

const Stepper = ({ currentStep }) => {
  const { getSteps } = useStepRegister();
  const stepList = getSteps(steps);

  const isStepActivated = (stepNumber) => {
    return currentStep >= stepNumber;
  };

  return (
    <div className={styles.stepper}>
      <div className={styles.stepper__content}>
        {stepList.map((step) => (
          <div className={styles.stepper__content_container}>
            <p>{step.stepNumber}</p>
            <div
              style={{
                backgroundColor: isStepActivated(step.stepNumber)
                  ? "#0C45A6"
                  : "#D9D9D9",
              }}
              className={styles.stepper__counter}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
