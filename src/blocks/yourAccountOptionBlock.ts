import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const yourAccountBlock: Block = {
  slug: "yourAccount",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [{ name: "title", type: "text", required: true }],
    },
  ],
};
