import type { Page } from "@/lib/content";

const page: Page = {
  title: "Privacy Policy | Founders Window Care & Detailing",
  description: "Privacy policy for Founders Window Care & Detailing.",
  noindex: true,
  blocks: [
    {
      type: "pageHeading",
      title: "Privacy Policy",
      text: "How Founders Window Care & Detailing collects, uses, and protects information submitted through this website.",
    },
    { type: "band" },
    {
      type: "article",
      sections: [
        {
          heading: "Information We Collect",
          paragraphs: [
            "We may collect information you provide through website forms, phone calls, emails, and service requests, including your name, contact information, address, and details about the services you need.",
          ],
        },
        {
          heading: "How We Use Information",
          paragraphs: [
            "We use this information to respond to inquiries, provide requested services, communicate about appointments, improve our website and services, and meet legal or operational requirements.",
          ],
        },
        {
          heading: "Information Sharing",
          paragraphs: [
            "We do not sell your personal information. We may share information with service providers that help us operate our business, when required by law, or when necessary to protect our rights and customers.",
          ],
        },
        {
          heading: "Calls and Text Messages",
          paragraphs: [
            "If you provide a phone number and consent to communications, we may contact you about your request. Message and data rates may apply. Consent is not a condition of purchase, and you may opt out of text messages by replying STOP.",
          ],
        },
        {
          heading: "Your Choices",
          paragraphs: [
            "You may request access to, correction of, or deletion of your personal information by contacting us through the contact details on this website.",
          ],
        },
      ],
    },
  ],
};

export default page;
