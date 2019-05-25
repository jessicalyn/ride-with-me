import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { citiesReducer } from './citiesReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  cities: citiesReducer,
  isLoading: loadingReducer
})
