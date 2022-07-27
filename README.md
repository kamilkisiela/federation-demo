## GraphQL Hive and Apollo Federation Demo

This repository is a demo of using Apollo Federation and GraphQL Hive to build a single schema on top of multiple services. The microservices are located under the [`./services`](./services/) folder and the gateway that composes the overall schema is in the [`gateway.js`](./gateway.js) file.

To run this demo locally, visit [graphql-hive.com](https://graphql-hive.com/).

1. [Create an organization](https://docs.graphql-hive.com/get-started/organizations)
1. [Create your first Federation project](https://docs.graphql-hive.com/get-started/projects)
1. [Generate your first token](https://docs.graphql-hive.com/features/tokens) and store it somewhere safe.

Pull down the repository then run the following commands:

```sh
yarn install
```

This will install all of the dependencies for the gateway and each underlying service.

Look at the code and pass the token:

```diff
hiveApollo({
-  enabled: false,
+  enabled: true,
-  token: "<your-token>",
+  token: "jn312hb424b2h34khbasdnmx",
  usage: true,
}),
```

Once you passed the token, you can now [generate an access](https://docs.graphql-hive.com/features/registry-usage#cdn-access) to GraphQL Hive CDN.

```diff
supergraphSdl: createSupergraphManager({
-  endpoint: "<your-endpoint>",
+  endpoint: "https://cdn.graphql-hive.com/238jfns734bhsad",
-  key: "<your-key>",
+  key: "=932maj89123njsad",
  pollIntervalInMs: 30_000,
}),
```

Almost there! Publish services to GraphQL Hive:

```sh
HIVE_TOKEN=<your-token> \
yarn workspace accounts run schema:publish \
yarn workspace products run schema:publish \
yarn workspace reviews run schema:publish \
yarn workspace inventory run schema:publish
```

To see the schema, visit [graphql-hive.com](https://graphql-hive.com/), go to your project and pick correct target.

You're ready to go!

This command will run all of the microservices at once. They can be found at http://localhost:4001, http://localhost:4002, http://localhost:4003, and http://localhost:4004.

```sh
yarn start-services
```

In another terminal window, run the gateway by running this command:

```sh
yarn start-gateway
```

This will start up the gateway and serve it at http://localhost:4000

To learn more about GraphQL Hive and Apollo Federation, check out the [docs](https://docs.graphql-hive.com)