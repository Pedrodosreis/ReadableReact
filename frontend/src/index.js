import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import middleware from './middleware'

import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, middleware)

ReactDOM.render(
	<Provider store={store}>
	  <BrowserRouter> 
	  	<App />
	  </BrowserRouter>
  </Provider>, document.getElementById('root')

  );


serviceWorker.unregister();
