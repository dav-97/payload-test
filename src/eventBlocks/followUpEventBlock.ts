import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const followUpEventBlock: Block = {
  slug: "followUpEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "connectedServices",
      type: "relationship",
      relationTo: ["documents"],
      hasMany: true,
    },
  ],
};
