import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const textareaBlock: Block = {
  slug: "textarea",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [{ name: "title", type: "text", required: true }],
    },
  ],
};
