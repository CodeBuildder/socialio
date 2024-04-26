import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
import { typeDefs } from "./schema/schema.js";
import { resolvers } from "./resolvers/resolvers.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 4000;

const driver = neo4j.driver(
  process.env.database,
  neo4j.auth.basic(process.env.databaseName, process.env.databasePassword)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver });

async function startServer() {
  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Wakey Wakey kk, your server is ready at port ${port}`);
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
