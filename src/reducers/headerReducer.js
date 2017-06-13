import {TOGGLE_LEFT_MENU} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function headerReducer(state = initialState.leftMenuClass, action) {

  switch (action.type) {
    case TOGGLE_LEFT_MENU:
      return objectAssign({}, state, {leftMenuClass: 'collapsed'});
    default:
      return state;
  }
}
