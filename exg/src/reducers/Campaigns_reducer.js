import { CAMPAIGNS_GET, CAMPAIGNS_TRAFFIC_UPDATE, CAMPAIGNS_UPDATE } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const campaigns = (state = [], action) => {
    switch (action.type) {
        case CAMPAIGNS_GET:
            return state;
        case CAMPAIGNS_TRAFFIC_UPDATE:
            return state;
        case CAMPAIGNS_UPDATE:
            return state;
    }
    
    return state;
};

export default campaigns;