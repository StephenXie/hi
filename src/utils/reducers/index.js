import { combineReducers } from 'redux';
import journals from './journals';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  journals,
  errors,
  messages,
  auth,
});