import channels from './Channels_reducer';
import landingPages from './LandingPages_reducer';
import outcomes from './Outcomes_reducer';
import dashboard from './Dashboard_reducer';
import search from './Search_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ 
    channels,
    dashboard,
    landingPages, 
    outcomes,
    search 
}); 