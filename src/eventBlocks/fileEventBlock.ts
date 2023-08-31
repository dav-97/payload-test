import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const fileEventBlock: Block = {
  slug: "fileEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "files",
      type: "relationship",
      relationTo: "files",
      hasMany: true,
    },
  ],
};
