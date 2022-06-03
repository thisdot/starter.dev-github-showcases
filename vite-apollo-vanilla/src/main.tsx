import '@lib/css/base.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import StandardLayout from './layouts/StandardLayout/StandardLayout.data';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  headers: {
    authorization: import.meta.env.VITE_GITHUB_ACCESS_TOKEN
      ? `bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
      : '',
  },
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <StandardLayout>Hello world</StandardLayout>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
