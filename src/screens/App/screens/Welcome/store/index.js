import { combineReducers } from 'redux';

import todosReducer from './todosReducer';

const welcome = combineReducers({
  todos: todosReducer,
});

export default welcome;
