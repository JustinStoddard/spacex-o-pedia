import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './Theme';

import getEnvVar from './Helpers/getEnvVar';

const domain = getEnvVar('REACT_APP_AUTH0_DOMAIN');
const clientId = getEnvVar('REACT_APP_AUTH0_CLIENT_ID');

ReactDOM.render(
  <Auth0Provider
    domain={domain || ""}
    clientId={clientId || ""}
    redirectUri={window.location.origin}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
