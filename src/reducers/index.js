import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { citiesReducer } from './citiesReducer';
import { loadingReducer } from './loadingReducer';
import { ridesReducer } from './ridesReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  cities: citiesReducer,
  isLoading: loadingReducer,
  rides: ridesReducer
})
