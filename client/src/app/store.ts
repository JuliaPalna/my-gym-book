import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
    type Action,
} from 'redux';
import { thunk, type ThunkAction, type ThunkDispatch } from 'redux-thunk';
import {
    workoutReducer,
    workoutsReducer,
    usersReducer,
} from './providers/reducers';

const rootReducer = combineReducers({
    workout: workoutReducer,
    workouts: workoutsReducer,
    users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppAction = Action<string>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AppAction>;

// Исправление ошибки TypeScript: window as any. Redux DevTools github
const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);
