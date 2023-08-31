import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const dataEventBlock: Block = {
  slug: "dataEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "data",
      type: "json",
    },
  ],
};
