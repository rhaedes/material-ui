import * as types from '../constants/ActionTypes';

export function updateCategorySlider(index, value) {
  return {
    type: types.UPDATE_CATEGORY_SLIDER,
    index,
    value,
  };
}

export function updateSlider(value) {
  return {
    type: types.UPDATE_SLIDER,
    value,
  };
}

export function dragStart() {
  return {
    type: types.CHANNEL_DRAG_START
  };
}

export function dragStop() {
  return {
    type: types.CHANNEL_DRAG_STOP
  };
}