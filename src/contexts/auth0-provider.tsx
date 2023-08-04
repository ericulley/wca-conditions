import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import config from '../config/config';

interface Auth0ProviderWithConfigProps {
    children: React.ReactNode;
}

export const Auth0ProviderWithHistory = ({
    children,
}: PropsWithChildren<Auth0ProviderWithConfigProps>): JSX.Element | null => {
    const { auth } = config;

    let navigate = useNavigate();
    const onRedirectCallback = (appState?: AppState) => {
        console.log('onRedirectCallback, appState: ', appState?.returnTo);
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(auth.domain && auth.clientId)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={auth.domain}
            clientId={auth.clientId}
            audience={auth.audience}
            redirectUri={auth.redirectUri}
            onRedirectCallback={onRedirectCallback}
            useRefreshTokens={true}
            cacheLocation={auth.cacheLocation}
        >
            {children}
        </Auth0Provider>
    );
};
