import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const signatureBlock: Block = {
  slug: "signature",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [{ name: "title", type: "text", required: true }],
    },
  ],
};
