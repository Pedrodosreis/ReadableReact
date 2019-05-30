import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // colocou em containers

import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import middleware from './middleware'
// import Header from './components/Header.js';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, middleware)

ReactDOM.render(
	<Provider store={store}>
  <BrowserRouter> 
  <App />
  </BrowserRouter>
  </Provider>, document.getElementById('root')

  );




//  If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
