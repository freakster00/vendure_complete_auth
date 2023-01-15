// import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {SessionProvider} from 'next-auth/react'

const client = new ApolloClient({
  uri: 'https://demo.vendure.io/shop-api',
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
  <SessionProvider session={session}>  <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
  </SessionProvider>

  )
}


