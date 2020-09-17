import { combineReducers } from 'redux';

// Reducers
import events from './events';

export default combineReducers({
  data: events
});