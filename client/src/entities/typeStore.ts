import { type Action } from 'redux';
import { type ThunkAction, type ThunkDispatch } from 'redux-thunk';
import type { ActionType } from '../app/constants';
import type { store } from '../app/store';

export type AppAction = Action<ActionType>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppAction
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppAction>;
export type AppStore = typeof store;
