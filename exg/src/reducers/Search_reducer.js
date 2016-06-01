import {INTERNAL_SEARCH_TERM_ADD, INTERNAL_SEARCH_TERM_DELETE, INTERNAL_SEARCH_TERM_UPDATE} from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const internalSearchTerm = (state, action) => {
  switch (action.type) {
    case INTERNAL_SEARCH_TERM_ADD:
      return {
        term: action.term,
        value: 0.5
      };
    case INTERNAL_SEARCH_TERM_UPDATE:
      if (state.term !== action.term) {
        return state;
      }
      
      return Object.assign({}, state, {
        value: action.value
      });
  }
  return state;
}

const internalSearchTerms = (state = [], action) => {
  switch (action.type) {
    case INTERNAL_SEARCH_TERM_ADD:
      return [
        ...state,
        internalSearchTerm(undefined, action)
      ];
    case INTERNAL_SEARCH_TERM_DELETE:
      var ref = state.find(x => x.term === action.term);
      var index = state.indexOf(ref);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case INTERNAL_SEARCH_TERM_UPDATE:
      return state.map(u => internalSearchTerm(u, action));
  }

  return state;
}



export default combineReducers({ internalSearchTerms });