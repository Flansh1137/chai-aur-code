import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const root = createRoot(document.getElementById('root'));

// Define the redirect after login dynamically
const onRedirectCallback = (appState) => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login-options`;
};

root.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
);
