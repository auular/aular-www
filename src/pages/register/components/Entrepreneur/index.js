import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FLOW_STEPS, steps } from "./steps";
import { useStepRegister } from "./useStepRegister";
import Stepper from "./Stepper";
import { BlueButton } from "../../../../components/BlueButton";
import { YellowButton } from "../../../../components/YellowButton";
import styles from "./Entrepreneur.module.scss";

const Entrepreneur = () => {
  const methods = useForm({ mode: "all" });

  const [currentStep, setStep] = useState();
  const [stepNumber, setStepNumber] = useState();

  const { findStep, getSteps } = useStepRegister();

  const onSubmit = async (data) => {
    if (stepNumber >= 3) return console.log("foi foi", data);
    setStepNumber(stepNumber + 1);
  };

  useEffect(() => {
    const { component, stepNumber } = findStep(FLOW_STEPS.COMPANY_DATA);
    setStep(component);
    setStepNumber(stepNumber);
  }, []);

  useEffect(() => {
    const stepsList = getSteps(steps);
    const [stepForward] = stepsList.filter(
      (step) => step.stepNumber == stepNumber
    );

    setStep(stepForward?.component);
  }, [stepNumber]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.entrepreneur}
      >
        <div className={styles.entrepreneur__header}>
          <h2>Cadastre seu hotel</h2>
          <Stepper currentStep={stepNumber} />
        </div>
        {currentStep}
        <div
          className={styles.entrepreneur__footer}
          style={{
            justifyContent: stepNumber > 1 ? "space-between" : "flex-end",
          }}
        >
          {stepNumber > 1 ? (
            <YellowButton
              value="Voltar"
              type="button"
              onClick={() => setStepNumber(stepNumber - 1)}
            />
          ) : null}
          <BlueButton
            value={stepNumber === 3 ? "Cadastrar" : "Avançar"}
            isActive={!methods.formState.isValid}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Entrepreneur;
