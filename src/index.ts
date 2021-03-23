import { MikroORM } from "@mikro-orm/core"
import "reflect-metadata";
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import express from "express"
import {ApolloServer} from "apollo-server-express"
import {buildSchema} from "type-graphql"
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  app.listen(4000, () => {
    console.log("server started on localhost:4000")
  })

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({app})

  console.log("Hello WORLD")
}

main().catch((err) => console.error(err))