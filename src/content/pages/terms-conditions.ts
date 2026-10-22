import type { Page } from "@/lib/content";

const page: Page = {
  title: "Terms & Conditions | Founders Window Care & Detailing",
  description: "Website terms and conditions for Founders Window Care & Detailing.",
  noindex: true,
  blocks: [
    {
      type: "pageHeading",
      title: "Terms & Conditions",
      text: "Terms governing use of the Founders Window Care & Detailing website and requests submitted through it.",
    },
    { type: "band" },
    {
      type: "article",
      sections: [
        {
          heading: "Website Use",
          paragraphs: [
            "This website provides general information about our business and services. You agree to use it only for lawful purposes and not to interfere with its operation or security.",
          ],
        },
        {
          heading: "Service Requests and Estimates",
          paragraphs: [
            "Submitting a form or contacting us does not create a service agreement. Availability, scope, scheduling, and pricing are confirmed separately before work begins.",
          ],
        },
        {
          heading: "Communications",
          paragraphs: [
            "By providing your contact information, you authorize us to respond regarding your inquiry. If you consent to text messages, message and data rates may apply. Reply STOP to opt out or HELP for assistance.",
          ],
        },
        {
          heading: "Website Content",
          paragraphs: [
            "We work to keep website information accurate, but services, availability, and other details may change. Website content is provided for general information and is not a substitute for a written service agreement.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "To the extent permitted by law, we are not liable for losses arising solely from reliance on general website content or temporary website unavailability.",
          ],
        },
      ],
    },
  ],
};

export default page;
