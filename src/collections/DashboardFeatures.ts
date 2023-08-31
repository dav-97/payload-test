import { CollectionConfig } from "payload/types";

export const DashboardFeatures: CollectionConfig = {
  slug: "dashboardFeatures",
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
      name: "name",
      type: "text",
    },
    {
      name: "enabled",
      type: "checkbox",
    },
  ],
};
