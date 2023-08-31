import { Field } from "payload/types";

export const defaultBlockFields: Field[] = [
  { name: "step", type: "number", required: true },
  { name: "slug", type: "text", required: true },
];
