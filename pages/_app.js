
import React from 'react';
import { UserProvider } from '@auth0/nextjs-Auth0/client';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}