import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
    authorizedUserReducer,
    usersReducer,
    workoutReducer,
    workoutsReducer,
} from './providers/reducers';

const rootReducer = combineReducers({
    workout: workoutReducer,
    workouts: workoutsReducer,
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
