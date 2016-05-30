import {REF_URLS_ADD, REF_URLS_DELETE, REF_URLS_UPDATE} from '../constants/ActionTypes';

export const addRefUrl = (input) => {
  return {
    type: REF_URLS_ADD,
    value: input
  }
}

export const delRefUrl = (url) => {
  return {
    type: REF_URLS_DELETE,
    value: url
  }
}

export const updateRefUrl = (url) => {
  return {
    type: REF_URLS_UPDATE,
    value: url
  }
}
