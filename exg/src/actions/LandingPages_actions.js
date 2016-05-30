import { LANDINGPAGES_GET, LANDINGPAGES_UPDATE } from '../constants/ActionTypes';

export function getData() {
    const request = fetch('/api/landingpages').then(x => x.json());
    
    return {
        type: LANDINGPAGES_GET,
        payload: request
    };
}

export function update() {
    return {
      type: LANDINGPAGES_UPDATE,
      payload: {}  
    };
}