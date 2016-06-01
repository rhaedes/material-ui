import campaigns from './Campaigns_reducer';
import refUrls from './RefUrls_reducer';
import channels from './Channels_reducer';
import landingPages from './LandingPages_reducer';
import outcomes from './Outcomes_reducer';
import dashboard from './Dashboard_reducer';
import process from './Process_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ 
    campaigns,
    refUrls,
    channels,
    dashboard,
    landingPages,
    process, 
    outcomes 
}); 