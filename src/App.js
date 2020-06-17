import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import './App.css';

import ExchangeRates from './components/ExchangeRates';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
};

export default App;

// https://codesandbox.io/s/nn9y2wzyw4?file=/src/index.js:0-885
// playground:
// https://48p1r2roz4.sse.codesandbox.io
//
//  import { useQuery, gql } from '@apollo/client';
// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `,
//   })
//   .then((result) => console.log('yyyy', result));
