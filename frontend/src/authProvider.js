// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/<ENTER TENANT ID>',
    clientId: '<ENTER CLIENT ID>'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
const authenticationParameters = {
  scopes: [
    'https://<ENTER-API-URI>/user_impersonation'
  ]
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Popup)