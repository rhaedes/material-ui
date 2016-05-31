import { PROCESS_START, PROCESS_UPDATE} from '../constants/ActionTypes'

const initialState = {
  progressId: undefined,
  visits: 0,
  contacts: 0,
  progress: 0
};

const progress = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_START:
      return Object.assign({}, initialState, {
        progressId: action.payload.id
      });

    case PROCESS_UPDATE:
      return Object.assign({}, state, {
        contacts: action.payload.CompletedVisitors,
        progress: action.payload.Progress,
        visits: action.payload.CompletedVisits,
      });
  }

  return state;
}

export default progress;