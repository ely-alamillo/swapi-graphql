import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello!';
  }
}

const startServer = async () => {
  const port = process.env.PORT || 8081;
  const schema = await buildSchema({ resolvers: [HelloResolver] });
  const apolloServer = new ApolloServer({ schema });

  const app = express();

  // apply middleware
  app.use(express.json());
  app.use(
    cors({
      origin: `http://localhost:${port}`
    })
  );
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(port, () => {
    console.log(`Server running @ http://localhost:${port}/graphql`);
  });
};

startServer();
