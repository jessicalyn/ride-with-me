import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { citiesReducer } from './citiesReducer';
import { loadingReducer } from './loadingReducer';
import { ridesReducer } from './ridesReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { searchableCitiesReducer } from './searchableCitiesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  cities: citiesReducer,
  isLoading: loadingReducer,
  rides: ridesReducer,
  searchResults: searchResultsReducer,
  searchableCities: searchableCitiesReducer,
  user: userReducer
})
