import { LANDINGPAGES_GET, LANDINGPAGES_UPDATE, LANDINGPAGES_UPDATE_SLIDER } from '../constants/ActionTypes';

export function getData() {
    const request = fetch('/api/landingpages').then(x => x.json());
    
    return {
        type: LANDINGPAGES_GET,
        payload: request
    };
}

export function update(landingPages) {
    return {
      type: LANDINGPAGES_UPDATE,
      payload: landingPages  
    };
}

export function updateSlider(id, value) {
    return {
        type: LANDINGPAGES_UPDATE_SLIDER,
        payload: { id, value }
    };
}