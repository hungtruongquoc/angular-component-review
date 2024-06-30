import {createReducer, on} from "@ngrx/store";
import {setTheme} from "./theme.actions";

const initialState = {}

export const themeReducer = createReducer(initialState, on(setTheme, (state) => {
  return {...state, name: 'dark'}
}));
