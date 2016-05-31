import { INTERNAL_SEARCH_TERM_ADD, INTERNAL_SEARCH_TERM_DELETE, INTERNAL_SEARCH_TERM_UPDATE } from '../constants/ActionTypes';

export const addInternalSearchTerm = (term) => {
  return {
    type: INTERNAL_SEARCH_TERM_ADD,
    term: term
  }
}

export const deleteInternalSearchTerm = (term) => {
  return {
    type: INTERNAL_SEARCH_TERM_DELETE,
    term: term
  }
}

export const updateInternalSearchTerm = (term, value) => {
  return {
    type: INTERNAL_SEARCH_TERM_UPDATE,
    term: term,
    value: value
  }
}