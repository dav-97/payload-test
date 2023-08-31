import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const selectBlock: Block = {
  slug: "select",
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
