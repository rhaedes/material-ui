import { OUTCOMES_GET, OUTCOMES_UPDATE} from '../constants/ActionTypes'
import { combineReducers } from 'redux';

const outcomes = (state = [], action) => {
    switch (action.type) {
        case OUTCOMES_GET:
            return [...action.payload];
            
        case OUTCOMES_UPDATE:
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

export default combineReducers({ outcomes });