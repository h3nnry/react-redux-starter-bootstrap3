import {TOGGLE_LEFT_MENU} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function headerReducer(state = initialState.header, action) {

  switch (action.type) {
    case TOGGLE_LEFT_MENU:
      let newState;
      newState = objectAssign({}, state);
      newState.header.expanded = action.expanded;
          return newState;
    default:
      return state;
  }
}
