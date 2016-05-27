import * as types from '../constants/ActionTypes';

export function updateSlider(value) {
  console.log("UPDATE");
  return {
    type: types.UPDATE_SLIDER,
    value,
  };
}

export function dragStart() {
  console.log("START");
  
  return {
    type: types.CHANNEL_DRAG_START
  };
}

export function dragStop() {
  console.log("STOP");
  
  return {
    type: types.CHANNEL_DRAG_STOP
  };
}