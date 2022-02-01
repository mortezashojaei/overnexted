import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme';

export function makeStore() {
  return configureStore({
    reducer: { theme: themeReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
