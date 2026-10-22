import type { Page } from "@/lib/content";

const page: Page = {
  title: "Thank You | Founders Window Care & Detailing",
  description: "Thanks for reaching out to Founders Window Care & Detailing. We received your request.",
  noindex: true,
  blocks: [
    {
      type: "pageHeading",
      title: "Thank You!",
      text: "We received your request. A member of the Founders Window Care & Detailing team will reach out shortly.",
      call: true,
    },
    { type: "band" },
    {
      type: "article",
      sections: [
        {
          heading: "What Happens Next",
          paragraphs: [
            "We'll review your details and contact you soon to answer questions and schedule your free quote.",
          ],
        },
        {
          heading: "Need Help Sooner?",
          paragraphs: [
            "Call us now any time during business hours and we'll be happy to help right away.",
          ],
        },
      ],
      call: true,
    },
  ],
};

export default page;
