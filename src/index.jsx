// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messageListReducer from './reducers/message_list_reducer';
import channelListReducer from './reducers/channel_list_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const reducers = combineReducers({
  messages: messageListReducer,
  channels: channelListReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// Middlewares
const middlewares = applyMiddleware(promiseMiddleware, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
