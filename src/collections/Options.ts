import { CollectionConfig } from "payload/types";

export const Options: CollectionConfig = {
  slug: "options",
  admin: {
    defaultColumns: ["type", "name", "updatedAt"],
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
      name: "type",
      type: "text",
    },
    {
      name: "name",
      type: "text",
    },
  ],
};
