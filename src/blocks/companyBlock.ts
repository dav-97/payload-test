import { Block } from "payload/types";
import { defaultBlockFields } from "./defaultBlock";

const fieldTypes = [
  "name",
  "address",
  "houseNumber",
  "postalCode",
  "city",
  "phone",
  "website",
];

export const companyBlock: Block = {
  slug: "company",
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
