import { ADD_INTERNAL_SEARCH_TERM } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const addInternalSearchTerm = (state = [], action) => {
    switch (action.type) {
        
        case ADD_INTERNAL_SEARCH_TERM:
            const payload = action.payload;
            let outcomes = [...state];
            let outcome = outcomes.find((item) => {
                return item.id === payload.id; 
            });
            
            outcome.value = payload.value;
            
            return outcomes;
    }
    
    return state;
}



export default combineReducers({ addInternalSearchTerm });