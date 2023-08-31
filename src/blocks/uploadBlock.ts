import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const uploadBlock: Block = {
  slug: "upload",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [{ name: "title", type: "text", required: true }],
    },
  ],
};
