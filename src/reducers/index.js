import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import header from './headerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  header,
  routing: routerReducer
});

export default rootReducer;
