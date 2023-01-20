import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0ProviderWithHistory } from "./auth0-provider";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
)
