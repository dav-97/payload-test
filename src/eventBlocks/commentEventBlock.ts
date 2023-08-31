import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const commentEventBlock: Block = {
  slug: "commentEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "person",
      type: "relationship",
      relationTo: ["users"],
    },
    {
      name: "files",
      type: "relationship",
      relationTo: "files",
      hasMany: true,
    },
  ],
};
