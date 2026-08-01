import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_spnrnlv";
const TEMPLATE_ID = "template_87nwhy9";
const PUBLIC_KEY = "3_a4maZ-6CVV3-rQM";

export const sendEmail = (templateParams) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
};