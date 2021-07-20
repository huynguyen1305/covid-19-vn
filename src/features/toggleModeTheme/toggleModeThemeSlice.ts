import { createSlice } from "@reduxjs/toolkit";

export const toggleModeThemeSlice = createSlice({
  name: "switchDarkmode",
  initialState: {
    typeTheme: "dark",
  },
  reducers: {
    setTypeTheme: (state, action) => {
      window.localStorage.setItem("theme", action.payload);
      if (action.payload === "dark") {
        window.localStorage.setItem("darkMode", "true");
      } else {
        window.localStorage.setItem("darkMode", "false");
      }
      state.typeTheme = action.payload;
    },
    toggleTheme: (state) => {
      if (state.typeTheme === "light") {
        window.localStorage.setItem("darkMode", "true");
        window.localStorage.setItem("theme", "dark");
        state.typeTheme = "dark";
      } else {
        window.localStorage.setItem("darkMode", "false");
        window.localStorage.setItem("theme", "light");
        state.typeTheme = "light";
      }
    },
  },
});

export const { toggleTheme, setTypeTheme } = toggleModeThemeSlice.actions;

export default toggleModeThemeSlice.reducer;
