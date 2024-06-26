import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalContextProvider } from '../utils/GlobalContext.jsx'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <KindeProvider
    clientId="<your_kinde_client_id>"
    domain="<your_kinde_domain>"
    logoutUri={window.location.origin}
    redirectUri={window.location.origin}
  >
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
  </KindeProvider>
  </React.StrictMode>,
)
