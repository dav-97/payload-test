import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const createFileEventBlock: Block = {
  slug: "createFileEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "fileSlug",
      type: "array",
      fields: [
        {
          name: "slug",
          type: "text",
        },
      ],
    },
  ],
};
