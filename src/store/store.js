import {configureStore} from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice.js';
import {localStorageUtils} from './localStorage.js';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();
  localStorageUtils.saveState(state);

  return result;
};

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState: localStorageUtils.loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
