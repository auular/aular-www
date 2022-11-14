import CompanyData from "./CompanyData";
import ServicesProvided from "./ServicesProvided";
import ImagesUpload from "./ImagesUpload";

export const FLOW_STEPS = {
  COMPANY_DATA: "company_data",
  SERVICES_PROVIDED: "services_provided",
  IMAGES_UPLOAD: "images_upload",
};

export const steps = {
  [FLOW_STEPS.COMPANY_DATA]: {
    component: <CompanyData />,
    stepNumber: 1,
  },

  [FLOW_STEPS.SERVICES_PROVIDED]: {
    component: <ServicesProvided />,
    stepNumber: 2,
  },

  [FLOW_STEPS.IMAGES_UPLOAD]: {
    component: <ImagesUpload />,
    stepNumber: 3,
  },
};
