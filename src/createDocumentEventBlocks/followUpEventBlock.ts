import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const createFollowUpEventBlock: Block = {
  slug: "createFollowUpEvent",
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
