import { CollectionConfig } from "payload/types";

export const Types: CollectionConfig = {
  slug: "types",
  admin: {
    defaultColumns: ["key", "name", "updatedAt"],
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
      name: "key",
      type: "text",
    },
    {
      name: "name",
      type: "text",
    },
  ],
};
