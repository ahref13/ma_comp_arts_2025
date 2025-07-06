import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import constants from './constants';

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${constants.SPACE}/environments/${constants.ENVIRONMENT}`;

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                articlesConnection: {
                    keyArgs: false,
                    merge(existing = {}, incoming) {
                        if (existing.values) {
                            return {
                                ...existing,
                                values: [
                                    ...existing.values,
                                    ...incoming.values,
                                ],
                            };
                        }
                        return incoming;
                    },
                },
            },
        },
    },
});

const httpLink = createHttpLink({
    uri: CONTENTFUL_URL,
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: `Bearer ${constants.TOKEN}`,
    },
}));

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
});

export default client;
