import { buildConfig } from "payload/config";
import path from "path";
import { Users } from "./collections/Users";
import { Categories } from "./collections/Categories";
import { Types } from "./collections/Types";
import { Documents } from "./collections/Documents";
import { DashboardFeatures } from "./collections/DashboardFeatures";
import { Files } from "./collections/Files";
import { Procedures } from "./collections/Procedures";

export default buildConfig({
  serverURL: "http://localhost:3333",
  admin: {
    user: Users.slug,
  },
  collections: [
    Documents,
    Procedures,
    Files,
    DashboardFeatures,
    Categories,
    Types,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
