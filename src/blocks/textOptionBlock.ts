import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const textBlock: Block = {
  slug: "text",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [{ name: "title", type: "text", required: true }],
    },
  ],
};
