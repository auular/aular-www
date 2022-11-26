import CompanyData from "./CompanyData";
import ServicesProvided from "./ServicesProvided";
import ImagesUpload from "./ImagesUpload";
import HotelDescription from "./HotelDescription";
import CompanyAddress from "./CompanyAddress";

export const FLOW_STEPS = {
  COMPANY_DATA: "company_data",
  COMPANY_ADDRESS: "company_address",
  SERVICES_PROVIDED: "services_provided",
  HOTEL_DESCRIPTION: "hotel_description",
  IMAGES_UPLOAD: "images_upload",
};

const steps = {
  [FLOW_STEPS.COMPANY_DATA]: {
    component: <CompanyData />,
    stepNumber: 1,
  },

  [FLOW_STEPS.HOTEL_DESCRIPTION]: {
    component: <HotelDescription />,
    stepNumber: 2,
  },

  [FLOW_STEPS.SERVICES_PROVIDED]: {
    component: <ServicesProvided />,
    stepNumber: 3,
  },

  [FLOW_STEPS.COMPANY_ADDRESS]: {
    component: <CompanyAddress />,
    stepNumber: 4,
  },

  [FLOW_STEPS.IMAGES_UPLOAD]: {
    component: <ImagesUpload />,
    stepNumber: 5,
  },
};

export default steps;
