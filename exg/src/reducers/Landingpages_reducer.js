import { LANDINGPAGES_GET, LANDINGPAGES_UPDATE } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const landingPages = (state = [], action) => {
    switch (action.type) {
        case LANDINGPAGES_GET:
            return [...state];
            
        case LANDINGPAGES_UPDATE:
            // TODO: Add update reducer logic
            
            return [...state];
    }
    
    return state;
};

export default combineReducers({ landingPages });