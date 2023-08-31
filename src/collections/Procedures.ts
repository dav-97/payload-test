import { CollectionConfig } from "payload/types";
import { eventBlocks } from "../eventBlocks";

export const Procedures: CollectionConfig = {
  slug: "procedures",
  admin: {
    defaultColumns: ["procedureUrl", "status", "updatedAt"],
    useAsTitle: "procedureUrl",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "status",
      type: "select",
      options: [
        { label: "Active", value: "active" },
        { label: "Waiting payment", value: "waiting_payment" },
        { label: "Done", value: "done" },
      ],
      defaultValue: "active",
    },
    {
      name: "procedureUrl",
      type: "text",
    },
    {
      name: "data",
      type: "json",
    },
    {
      name: "document",
      type: "relationship",
      relationTo: ["documents"],
    },
    {
      name: "user",
      type: "relationship",
      relationTo: ["users"],
    },
    {
      name: "pdfDocument",
      type: "relationship",
      relationTo: ["files"],
    },
    {
      name: "statusEvents",
      type: "group",
      fields: [
        {
          name: "events",
          type: "blocks",
          blocks: eventBlocks,
        },
        {
          name: "expextedDelivery",
          type: "date",
        },
        {
          name: "logs",
          type: "array",
          fields: [],
        },
        {
          name: "notes",
          type: "array",
          fields: [],
        },
      ],
    },
    {
      name: "payment",
      type: "group",
      fields: [
        {
          name: "paymentId",
          type: "text",
        },
        {
          name: "paymentStatus",
          type: "text",
        },
        {
          name: "molliePaymentStatus",
          type: "text",
        },
        {
          name: "paymentMethod",
          type: "text",
        },
        {
          name: "chargedBack",
          type: "checkbox",
        },
        {
          name: "paymentType",
          type: "group",
          fields: [
            { name: "price", type: "number" },
            { name: "paymentType", type: "text" },
          ],
        },
      ],
    },
  ],
};
