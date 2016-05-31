import { LANDINGPAGES_GET, LANDINGPAGES_UPDATE } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const defaultState = { 
    treeview: {}, 
    added: []
};

const landingPages = (state = defaultState, action) => {
    switch (action.type) {
        case LANDINGPAGES_GET:
            return Object.assign(state, { treeview: action.payload });
            
        case LANDINGPAGES_UPDATE:
            return Object.assign(state, { added: [...action.payload] });
    }
    
    return state;
};

export default combineReducers({ landingPages });