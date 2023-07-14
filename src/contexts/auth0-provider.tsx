import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithConfigProps {
    children: React.ReactNode;
}

export const Auth0ProviderWithHistory = ({
    children,
}: PropsWithChildren<Auth0ProviderWithConfigProps>): JSX.Element | null => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    let navigate = useNavigate();

    const onRedirectCallback = (appState?: AppState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            audience={audience}
            redirectUri={redirectUri + '/reports'}
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens={true}
            cacheLocation={'localstorage'}
        >
            {children}
        </Auth0Provider>
    );
};
