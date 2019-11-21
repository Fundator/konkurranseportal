// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/ce25ca93-004f-44f4-a6b5-eb22b45815aa',
    clientId: '38f43525-8041-4b19-84b2-dbbc41f5c6a1'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// const authenticationParameters = {
//   scopes: [
//     'https://<ENTER-API-URI>/user_impersonation'
//   ]
// }

export const authProvider = new MsalAuthProvider(config, LoginType.Popup)