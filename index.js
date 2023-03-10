import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from '../schema/type-defs.js';
import { resolvers } from './schema/resolvers'


const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log( `Apollo Server ready to run at : ${url}`);