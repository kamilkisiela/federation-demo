/// @ts-check
import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";
import { hiveApollo, createSupergraphManager } from "@graphql-hive/client";

const gateway = new ApolloGateway({
  // Apollo Gateway will fetch Supergraph from GraphQL Hive CDN
  supergraphSdl: createSupergraphManager({
    // https://docs.graphql-hive.com/features/registry-usage#cdn-access
    endpoint: "<your-endpoint>",
    key: "<your-key>",
    pollIntervalInMs: 30_000,
  }),
});

const server = new ApolloServer({
  gateway,
  plugins: [
    hiveApollo({
      enabled: false,
      token: "<your-token>", // https://docs.graphql-hive.com/features/tokens with "Registry" read-write rights
      usage: true, // http://localhost:3000/features/monitoring#apollo-server
    }),
  ],
});

const { url } = await server.listen();

console.log(`🚀 Server ready at ${url}`);
