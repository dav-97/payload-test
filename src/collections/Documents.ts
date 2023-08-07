import { CollectionConfig } from "payload/types";
import { yourAccountBlock } from "../blocks/yourAccountOptionBlock";

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
      name: "options",
      type: "blocks",
      blocks: [yourAccountBlock],
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
      name: "template",
      type: "textarea",
    },
  ],
};
