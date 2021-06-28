import { ActionReducerMap } from '@ngrx/store';
import { appReducer, appState } from './app.reducer';

export const rootReducer = {};

export interface AppState {
  Books: appState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  Books: appReducer,
};
