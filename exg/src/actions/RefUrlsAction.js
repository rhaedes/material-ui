import {REF_URLS_ADD, REF_URLS_DELETE, REF_URLS_UPDATE} from '../constants/ActionTypes';

export const addRefUrl = (url) => {
  return {
    type: REF_URLS_ADD,
    url: url
  }
}

export const delRefUrl = (url) => {
  return {
    type: REF_URLS_DELETE,
    url: url
  }
}

export const updateRefUrl = (url, value) => {
  console.log("fire!");
  return {
    type: REF_URLS_UPDATE,
    url: url,
    value: value
  }
}
