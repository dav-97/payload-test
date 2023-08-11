import { buildConfig } from "payload/config";
import path from "path";
import { Todos } from "./collections/TodoLists";
import { Users } from "./collections/Users";
import { Categories } from "./collections/Categories";
import { Types } from "./collections/Types";
import { Options } from "./collections/Options";
import { Documents } from "./collections/Documents";

export default buildConfig({
  serverURL: "http://localhost:3333",
  admin: {
    user: Users.slug,
  },
  collections: [Documents, Categories, Types, Options, Users, Todos],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
