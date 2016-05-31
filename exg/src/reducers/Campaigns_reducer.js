import { CAMPAIGNS_GET, CAMPAIGNS_TRAFFIC_UPDATE, CAMPAIGNS_UPDATE } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const defaultState = {
    dataLoaded: false,
    items: [],
    traffic: {
        name: null,
        value: 0
    }
}

const campaigns = (state = defaultState, action) => {
    switch (action.type) {
        case CAMPAIGNS_GET:
            return action.payload;
        case CAMPAIGNS_TRAFFIC_UPDATE:
            return state;
        case CAMPAIGNS_UPDATE:
            return state;
    }
    
    return state;
};

export default campaigns;