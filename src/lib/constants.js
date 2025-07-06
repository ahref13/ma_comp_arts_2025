import getConfig from 'next/config';

// eslint-disable-next-line
let SPACE = process.env.CONTENTFUL_SPACE_ID;
let ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
let TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const config = getConfig();

if (config) {
    const { publicRuntimeConfig } = getConfig();
    SPACE = publicRuntimeConfig.CONTENTFUL_SPACE_ID;
    ENVIRONMENT = publicRuntimeConfig.CONTENTFUL_ENVIRONMENT;
    TOKEN = publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN;
}

// const REST_API_URL = API_URL.replace('/graphql', '');

export default {
    SPACE,
    ENVIRONMENT,
    TOKEN,
};
