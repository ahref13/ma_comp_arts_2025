module.exports = {

"[externals]/@apollo/client/react [external] (@apollo/client/react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client/react", () => require("@apollo/client/react"));

module.exports = mod;
}}),
"[externals]/@apollo/client [external] (@apollo/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client", () => require("@apollo/client"));

module.exports = mod;
}}),
"[externals]/@apollo/client/link/context [external] (@apollo/client/link/context, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client/link/context", () => require("@apollo/client/link/context"));

module.exports = mod;
}}),
"[externals]/next/config.js [external] (next/config.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/config.js", () => require("next/config.js"));

module.exports = mod;
}}),
"[project]/src/lib/constants.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$config$2e$js__$5b$external$5d$__$28$next$2f$config$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/config.js [external] (next/config.js, cjs)");
;
// eslint-disable-next-line
let SPACE = process.env.CONTENTFUL_SPACE_ID;
let ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
let TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const config = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$config$2e$js__$5b$external$5d$__$28$next$2f$config$2e$js$2c$__cjs$29$__["default"])();
if (config) {
    const { publicRuntimeConfig } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$config$2e$js__$5b$external$5d$__$28$next$2f$config$2e$js$2c$__cjs$29$__["default"])();
    SPACE = publicRuntimeConfig.CONTENTFUL_SPACE_ID;
    ENVIRONMENT = publicRuntimeConfig.CONTENTFUL_ENVIRONMENT;
    TOKEN = publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN;
}
const __TURBOPACK__default__export__ = {
    SPACE,
    ENVIRONMENT,
    TOKEN
};
}}),
"[project]/src/lib/apolloClient.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client/link/context [external] (@apollo/client/link/context, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.js [ssr] (ecmascript)");
;
;
;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].SPACE}/environments/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].ENVIRONMENT}`;
const cache = new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["InMemoryCache"]({
    typePolicies: {
        Query: {
            fields: {
                articlesConnection: {
                    keyArgs: false,
                    merge (existing = {}, incoming) {
                        if (existing.values) {
                            return {
                                ...existing,
                                values: [
                                    ...existing.values,
                                    ...incoming.values
                                ]
                            };
                        }
                        return incoming;
                    }
                }
            }
        }
    }
});
const httpLink = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["createHttpLink"])({
    uri: CONTENTFUL_URL
});
const authLink = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__cjs$29$__["setContext"])((_, { headers })=>({
        headers: {
            ...headers,
            authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].TOKEN}`
        }
    }));
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["ApolloClient"]({
    link: authLink.concat(httpLink),
    cache
});
const __TURBOPACK__default__export__ = client;
}}),
"[project]/src/pages/_app.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client/react [external] (@apollo/client/react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apolloClient.js [ssr] (ecmascript)");
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__cjs$29$__["ApolloProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apolloClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/src/pages/_app.js",
            lineNumber: 8,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/_app.js",
        lineNumber: 7,
        columnNumber: 7
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__873874f7._.js.map