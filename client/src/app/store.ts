import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
    type Action,
} from 'redux';
import { thunk, type ThunkAction, type ThunkDispatch } from 'redux-thunk';
import {
    authorizedUserReducer,
    usersReducer,
    workoutReducer,
    workoutsPerMonthReducer,
} from '../entities';
import type { ActionType } from './constants';

const rootReducer = combineReducers({
    workout: workoutReducer,
    workouts: workoutsPerMonthReducer,
    users: usersReducer,
    authorizedUser: authorizedUserReducer,
});

// Исправление ошибки TypeScript: window as any. Redux DevTools github
const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

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
