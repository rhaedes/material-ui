import { DASHBOARD_GET} from '../constants/ActionTypes'
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
    switch (action.type) {
        case DASHBOARD_GET:
            return action.payload.data;                    
    }
    
    return state;
}

export default combineReducers( {data} );