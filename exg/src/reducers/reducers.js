import channels from './Channels_reducer';
import outcomes from './Outcomes_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ channels, outcomes }); 