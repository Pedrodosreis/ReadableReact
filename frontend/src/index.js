import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // colocou em containers

import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import {combineReducers} from 'redux';
// import reducers from './reducers'
// import Header from './components/Header.js';

import * as serviceWorker from './serviceWorker';

//const store = createStore(
//	reducers,
//	{}, // estado inicial
//	applyMiddleware(thunk),
//);

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const RECEIVE_DATA = 'RECEIVE_DATA';

function goals (state = [], action) {
      switch(action.type) {
        case ADD_GOAL :
          return state.concat([action.goal])
        case REMOVE_GOAL :
          return state.filter((goal) => goal.id !== action.id)
        case RECEIVE_DATA :
          return action.goals
        default :
          return state
      }
    }

const store = createStore(combineReducers({
      goals,
}))

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
