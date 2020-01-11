import { combineReducers } from 'redux';

import welcome from '../screens/Welcome/store';

const app = combineReducers({
  welcome,
});

export default app;
