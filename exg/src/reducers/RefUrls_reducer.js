import {REF_URLS_ADD, REF_URLS_DELETE, REF_URLS_UPDATE} from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const refUrl = (state, action) => {
  switch (action.type) {
    case REF_URLS_ADD:
      return {
        url: action.url,
        value: 0.5
      };
    case REF_URLS_UPDATE:
      if (state.url !== action.url) {
        return state;
      }
      
      return Object.assign({}, state, {
        value: action.value
      });
  }
  return state;
}

const refUrls = (state = [], action) => {
  switch (action.type) {
    case REF_URLS_ADD:
      return [
        ...state,
        refUrl(undefined, action)
      ];
    case REF_URLS_DELETE:
      var ref = state.find(x => x.url === action.url);
      var index = state.indexOf(ref);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case REF_URLS_UPDATE:
      return state.map(u => refUrl(u, action));
  }

  return state;
}



export default combineReducers({ refUrls });