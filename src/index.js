import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
import './index.scss';
import App from './containers/App/App';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://ride-with-me-backend.herokuapp.com/graphql/"
});

client.query({
    query: gql` 
    {
      allCities {
        name
      }
    }
  `
  })
  .then(result => console.log(result));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));