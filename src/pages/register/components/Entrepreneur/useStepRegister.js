import steps from "./steps";

export const useStepRegister = () => {
  const findStep = (stepName) => {
    return steps[stepName] ?? "Invalid step";
  };

  const getSteps = (stepObject) => {
    return Object.values(stepObject);
  };

  return {
    findStep,
    getSteps,
  };
};
