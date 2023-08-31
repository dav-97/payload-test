import { CollectionConfig } from "payload/types";

export const Files: CollectionConfig = {
  slug: "files",
  admin: {
    defaultColumns: ["key", "owner", "name", "bucket", "location", "updatedAt"],
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
      name: "owner",
      type: "relationship",
      relationTo: ["users"],
    },
    {
      name: "name",
      type: "text",
    },
    {
      name: "bucket",
      type: "text",
    },
    {
      name: "location",
      type: "text",
    },
  ],
};
