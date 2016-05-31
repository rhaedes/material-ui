import { ADD_INTERNAL_SEARCH_TERM } from '../constants/ActionTypes';

export function update(id, value) {
    return {
        type: ADD_INTERNAL_SEARCH_TERM,
        payload: { id, value }
    };
}

