import * as types from '../constants/ActionTypes';

const initialState = {
  channels: {
    dragging: true,
    channelTraffic: 0.5
  }
};

const channelsReducer = (state, action) => {
  switch (action.type) {

    case types.UPDATE_SLIDER:
      return Object.assign({}, state, {
        channelTraffic: action.value
      });
      
    case types.CHANNEL_DRAG_START:
      return Object.assign({}, state, {
        dragging: true
      });
    
    case types.CHANNEL_DRAG_STOP:
      return Object.assign({}, state, {
        dragging: false
      });

    default:
      return state;
  }
}


export default function settings(state = initialState, action) {
  switch (action.type) {

    case types.UPDATE_SLIDER:
    case types.CHANNEL_DRAG_START:
    case types.CHANNEL_DRAG_STOP:
      return Object.assign({}, state, {
        channels: channelsReducer(state.channels, action)
      });

    default:
      return state;
  }
}