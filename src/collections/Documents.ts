import { CollectionConfig } from "payload/types";
import { blocks } from "../blocks";
import { createEventBlocks } from "../createDocumentEventBlocks";

export const Documents: CollectionConfig = {
  slug: "documents",
  admin: {
    defaultColumns: ["name", "updatedAt"],
    useAsTitle: "name",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "key",
      type: "text",
    },
    {
      name: "authentication",
      type: "checkbox",
      defaultValue: true,
      label: "Does this service require authentication?",
    },
    {
      name: "signature",
      type: "checkbox",
      defaultValue: true,
      label: "Does this service require a signature?",
    },
    {
      name: "options",
      type: "blocks",
      blocks,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: ["categories"],
      hasMany: true,
      unique: true,
    },
    {
      name: "type",
      type: "relationship",
      relationTo: ["types"],
    },
    {
      name: "noPaymentEvents",
      type: "blocks",
      blocks: createEventBlocks,
    },
    {
      name: "payment",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        {
          name: "paymentOptions",
          type: "array",
          fields: [
            { name: "key", type: "text", required: true },
            { name: "title", type: "text", required: true },
            { name: "price", type: "number", required: true },
            {
              name: "dashboardFeatures",
              type: "relationship",
              relationTo: ["dashboardFeatures"],
              hasMany: true,
              filterOptions: () => ({
                enabled: { equals: true },
              }),
            },
            {
              name: "valuta",
              defaultValue: "EURO",
              type: "text",
              required: true,
            },
            { name: "popular", type: "checkbox" },
            {
              name: "events",
              type: "blocks",
              blocks: createEventBlocks,
            },
            {
              name: "features",
              type: "array",
              required: true,
              fields: [
                {
                  name: "type",
                  type: "select",
                  defaultValue: "positive",
                  options: ["positive", "negative"],
                },
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "template",
      type: "textarea",
    },
  ],
};
