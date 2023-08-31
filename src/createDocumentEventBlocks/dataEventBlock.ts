import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const createDataEventBlock: Block = {
  slug: "createDataEvent",
  fields: [...defaultBlockFields],
};
