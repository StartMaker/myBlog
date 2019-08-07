import {Map} from 'immutable';
import { combineReducers } from 'redux-immutable';
import {createStore, applyMiddleware} from 'redux';
import redux_thunk from 'redux-thunk';
// import redux_logger from 'redux-logger';

import blogs from '../reducers/blogs';
import account from '../reducers/account';

const reducers = combineReducers({
  blogs,
  account
});
const initState = Map({
  blogs: {
    content: []
  },
  account: {
    username: '',
    status: false
  }
});

export default () => {
  return createStore(
    reducers,
    initState,
    applyMiddleware(redux_thunk)
    // applyMiddleware(redux_logger,redux_thunk)
  );
}

export {initState};