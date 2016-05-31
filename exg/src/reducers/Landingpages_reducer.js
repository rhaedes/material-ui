import { LANDINGPAGES_GET, LANDINGPAGES_UPDATE, LANDINGPAGES_UPDATE_SLIDER } from '../constants/ActionTypes';
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
        
        case LANDINGPAGES_UPDATE_SLIDER:
            const payload = action.payload;
            let landingPages = Object.assign(state, { added: [...state.added] });
            let landingPage = landingPages.added.find((item) => {
                return item.id === payload.id; 
            });
            
            landingPage.sliderValue = payload.value;
            
            return landingPages;
    }
    
    return state;
};

export default combineReducers({ landingPages });