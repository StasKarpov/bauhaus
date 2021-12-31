import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { STRAPI_BASE_URL } from "../config";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${STRAPI_BASE_URL}/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;
