// import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:6969/shop-api',
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }) {
  return (<ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
  
  )
}
