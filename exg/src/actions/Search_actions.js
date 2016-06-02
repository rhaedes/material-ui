import { 
  INTERNAL_SEARCH_TERM_ADD, 
  INTERNAL_SEARCH_TERM_DELETE,
  INTERNAL_SEARCH_TERM_UPDATE, 
  EXTERNAL_SEARCH_TERM_ADD, 
  EXTERNAL_SEARCH_TERM_DELETE,
  EXTERNAL_SEARCH_TERM_UPDATE,
  } from '../constants/ActionTypes';

export const addInternalSearchTerm = (term) => {
  return {
    type: INTERNAL_SEARCH_TERM_ADD,
    term: term
  }
}

export const delInternalSearchTerm = (term) => {
  return {
    type: INTERNAL_SEARCH_TERM_DELETE,
    term: term
  }
}

export const updateInternalSearchTerm = (term, value) => {
  return {
    type: EXTERNAL_SEARCH_TERM_UPDATE,
    term: term,
    value: value
  }
}

export const addExternalSearchTerm = (term) => {
  return {
    type: EXTERNAL_SEARCH_TERM_ADD,
    term: term
  }
}

export const delExternalSearchTerm = (term) => {
  return {
    type: EXTERNAL_SEARCH_TERM_DELETE,
    term: term
  }
}

export const updateExternalSearchTerm = (term, value) => {
  return {
    type: EXTERNAL_SEARCH_TERM_UPDATE,
    term: term,
    value: value
  }
}