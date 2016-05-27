import * as types from '../constants/ActionTypes';

export function updateCategorySlider(index, value) {
  console.log("UPDATE CATEGORY SLIDER");
  return {
    type: types.UPDATE_CATEGORY_SLIDER,
    index,
    value,
  };
}

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