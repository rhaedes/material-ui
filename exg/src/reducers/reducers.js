import channels from './Channels_reducer';
import landingPages from './LandingPages_reducer';
import outcomes from './Outcomes_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ 
    channels,
    landingPages, 
    outcomes 
}); 