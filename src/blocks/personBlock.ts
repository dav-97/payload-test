import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

const fieldTypes = [
  "name",
  "street",
  "houseNumber",
  "postalCode",
  "city",
  "phone",
  "email",
  "IBAN",
];

export const personBlock: Block = {
  slug: "person",
  fields: [
    ...defaultBlockFields,
    {
      name: "configuration",
      type: "group",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "fields",
          type: "select",
          hasMany: true,
          required: true,
          options: fieldTypes,
        },
      ],
    },
  ],
};
