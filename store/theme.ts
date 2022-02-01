import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '.';

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.isDark = true;
    },
    setLightTheme: (state) => {
      state.isDark = false;
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme;

export default themeSlice.reducer;
