import UserReducers from './user.js';
import CommonReducers from './common.js';
import { combineReducers } from 'redux';

export default combineReducers({
  common: CommonReducers,
  user: UserReducers
});
