/// @ts-check
import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "accounts", url: "http://localhost:4001/graphql" },
      { name: "reviews", url: "http://localhost:4002/graphql" },
      { name: "products", url: "http://localhost:4003/graphql" },
      { name: "inventory", url: "http://localhost:4004/graphql" },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
});

const { url } = await server.listen();

console.log(`🚀 Server ready at ${url}`);
