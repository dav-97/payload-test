import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
      required: true,
      defaultValue: "user",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "city",
      type: "text",
    },
    {
      name: "street",
      type: "text",
    },
    {
      name: "houseNumber",
      type: "text",
    },
    {
      name: "postalCode",
      type: "text",
    },
  ],
};
