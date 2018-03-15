

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import {createStore, applyMiddleware ,compose } from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extention'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

// Styles layout
import './styles/main.css'
import Layout from 'containers/base_layout'
import Gundams from 'containers/gundams'
import GundamDetail from 'containers/gundam_detail'
import Admin from 'containers/admin'


import reducers from 'reducers'


const store = createStore(reducers,
  compose(applyMiddleware(thunk)/* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const history = syncHistoryWithStore(browserHistory,store)

const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Gundams} /> 
        </Route>
        <Route path='gundams/:id' component={GundamDetail} />
        <Route path='admin' component={Admin} />
      </Router>
      </Provider>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

// document.write('index client')
