import { DASHBOARD_GET } from '../constants/ActionTypes';


export function getChartsData(id, value) {    
    const request = fetch('/api/dashboard').then(x => x.json());

    return {
        type: DASHBOARD_GET,
        payload: request
    };
}