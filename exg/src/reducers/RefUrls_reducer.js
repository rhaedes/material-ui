import {REF_URLS_ADD, REF_URLS_DELETE} from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const refUrl = (state, action) => {
  switch (action.type) {
    case REF_URLS_ADD:
      return {
        url: action.value,
        value: 0.5
      }
  }
  return state;
}

const urls = (state = [], action) => {
  switch (action.type) {
    case REF_URLS_ADD:
      return [
        ...state,
        refUrl(undefined, action)
      ]
    case REF_URLS_DELETE:
      var ref = state.find(x => x.url === action.value);
      var index = state.indexOf(ref);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
  }

  return state;
}



export default combineReducers({ urls });