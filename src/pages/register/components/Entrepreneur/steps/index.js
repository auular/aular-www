import CompanyData from "./CompanyData";
import ServicesProvided from "./ServicesProvided";
import ImagesUpload from "./ImagesUpload";
import FLOW_STEPS from "./flowSteps";
import HotelDescription from "./HotelDescription";

const steps = {
  [FLOW_STEPS.COMPANY_DATA]: {
    component: <CompanyData />,
    stepNumber: 1,
  },

  [FLOW_STEPS.SERVICES_PROVIDED]: {
    component: <ServicesProvided />,
    stepNumber: 2,
  },

  [FLOW_STEPS.HOTEL_DESCRIPTION]: {
    component: <HotelDescription />,
    stepNumber: 3,
  },

  [FLOW_STEPS.IMAGES_UPLOAD]: {
    component: <ImagesUpload />,
    stepNumber: 4,
  },
};

export default steps;
