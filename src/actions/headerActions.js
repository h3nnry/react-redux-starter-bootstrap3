import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function toggleMenu(leftMenuClass) {
  // console.log(leftMenuClass)
  return function (dispatch) {
    return dispatch({
      type: types.TOGGLE_LEFT_MENU,
      leftMenuClass
    });
  };
}
