import pkg from "../package.json";
import resolvers from "./resolvers";
import schemas from "./schemas";
import queries from "./queries";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Plugin Example",
    name: "plugin-example",
    version: pkg.version,
    queries,
    graphQL: {
      resolvers,
      schemas
    },
  });
}
