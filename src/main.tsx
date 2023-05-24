import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './contexts/auth0-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </Router>
    </React.StrictMode>
);
