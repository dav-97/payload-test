import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const radioBlock: Block = {
  slug: "radio",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "fields",
          type: "array",
          required: true,
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true },
            { name: "description", type: "text" },
          ],
        },
      ],
    },
  ],
};
