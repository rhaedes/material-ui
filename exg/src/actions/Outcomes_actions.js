import { OUTCOMES_GET, OUTCOMES_UPDATE } from '../constants/ActionTypes';

export function update(id, value) {
    return {
        type: OUTCOMES_UPDATE,
        payload: { id, value }
    };
}

export function getData(id, value) {
    const request = fetch('/api/outcomes').then(x => x.json());

    return {
        type: OUTCOMES_GET,
        payload: request
    };
}