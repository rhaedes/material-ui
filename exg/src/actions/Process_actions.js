import { PROCESS_START, PROCESS_UPDATE } from '../constants/ActionTypes';

export const start = () => {
  const request = fetch('/api/xgen/jobs', {method: 'post'}).then(x => x.json());
  
  return {
    type: PROCESS_START,
    payload: request
  }
}

export const update = (id) => {
  const request = fetch(`/api/xgen/jobs/${id}`).then(x => x.json());
  
  return {
    type: PROCESS_UPDATE,
    payload: request
  }
}



