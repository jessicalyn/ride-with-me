import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { citiesReducer } from './citiesReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  cities: citiesReducer
})