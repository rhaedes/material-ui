import { DASHBOARD_GET} from '../constants/ActionTypes'
import { combineReducers } from 'redux';

const dashboardInitState = 
    {
        visitsPerChannel:[],
        monthlyDistribution:[]
    }

const data = (state = dashboardInitState, action) => {
    switch (action.type) {
        case DASHBOARD_GET:
            return action.payload.data;                    
    }
    
    return state;
}

export default combineReducers( {data} );