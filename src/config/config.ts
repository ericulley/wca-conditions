const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
const cacheLocation = import.meta.env.VITE_AUTH0_TOKEN_CACHE_LOCATION;
const API_URL = import.meta.env.VITE_API_URL;

export default {
    auth: {
        domain: domain,
        clientId: clientId,
        redirectUri: redirectUri,
        audience: audience,
        cacheLocation: cacheLocation,
    },
    api: {
        url: API_URL,
    },
};
