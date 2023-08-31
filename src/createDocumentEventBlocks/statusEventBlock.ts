import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

export const createStatusEventBlock: Block = {
  slug: "createStatusEvent",
  fields: [
    ...defaultBlockFields,
    {
      name: "done",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "inProgress",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "label",
      type: "text",
    },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "stepFinsihed",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "stepFinishedMessage",
      type: "text",
    },
    {
      name: "stepFinishedDate",
      type: "date",
    },
  ],
};
