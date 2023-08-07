import { Block } from "payload/types";

export const yourAccountBlock: Block = {
  slug: "yourAccount",
  fields: [
    { name: "step", type: "number" },
    { name: "slug", type: "text" },
    { name: "option", type: "relationship", relationTo: "options" },
    {
      name: "configuration",
      type: "group",
      fields: [
        { name: "header", type: "text" },
        { name: "subHeader", type: "text" },
        { name: "label", type: "text" },
      ],
    },
  ],
};
