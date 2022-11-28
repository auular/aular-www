import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import steps from "./steps";
import { FLOW_STEPS } from "./steps";
import { useStepRegister } from "./useStepRegister";
import Stepper from "./Stepper";
import { BlueButton } from "../../../../components/BlueButton";
import { YellowButton } from "../../../../components/YellowButton";
import styles from "./Entrepreneur.module.scss";
import axios from "axios";
import { useSlug } from "../../../../hooks/useSlug";
import api from "../../../../services/api";
import { useBooleanValue } from "../../../hotel/hooks/useBooleanValue";
import { averagePrice } from "./checkbox";

const Entrepreneur = () => {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      hotel: {},
      servicesProvided: {},
      averagePrice: {},
      files: [],
    },
  });

  const [currentStep, setStep] = useState();
  const [stepNumber, setStepNumber] = useState();
  const [hotelId, setHotelId] = useState();

  const { findStep, getSteps } = useStepRegister();

  const onSubmit = async (payload) => {
    if (stepNumber === 2) {
      const { hotel } = payload;
      try {
        const { data } = await api.post("/hotels", hotel);
        setHotelId(data);
      } catch (err) {
        console.log(err);
      }
    }

    if (stepNumber >= getSteps(steps).length) {
      handleUpload(methods.getValues("files"));
      const { getContentByBoolean, getBooleans } = useBooleanValue();

      const selectedPrice = getBooleans(payload.averagePrice);
      const [value] = getContentByBoolean(selectedPrice, averagePrice, "00");

      const hotel = { hotelId };

      payload.servicesProvided.averagePrice = value.content;
      payload.servicesProvided.hotel = hotel;
      payload.address.hotel = hotel;

      try {
        const res = await api.post(`/hotels/allFields/${hotelId}`, payload);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      return console.log("foi foi", payload);
    }

    setStepNumber(stepNumber + 1);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  const handleUpload = async (files) => {
    files.map(async (file) => {
      const convertedFile = await convertToBase64(file);

      const hotelName = methods.getValues("hotel.name")?.toString();

      const { buildSlugByName } = useSlug();
      const hotelSlug = buildSlugByName(hotelName);

      const imageUrl = await axios.post("http://localhost:3000/api/v1/upload", {
        image: convertedFile,
        imageName: file.name,
        hotelSlug,
      });

      // console.log(imageUrl);
    });
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
        <Suspense fallback={<h1>loading...</h1>}>{currentStep}</Suspense>
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
            value={
              stepNumber === getSteps(steps).length ? "Cadastrar" : "Avançar"
            }
            padding={15}
            isActive={!methods.formState.isValid}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Entrepreneur;
