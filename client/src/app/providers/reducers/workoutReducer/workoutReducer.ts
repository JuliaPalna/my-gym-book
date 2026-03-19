import type { WorkoutAction } from './type';
import { workoutInitialState, type WorkoutState } from './workoutState';

export const workoutReducer = (
    state: WorkoutState = workoutInitialState,
    action: WorkoutAction,
): WorkoutState => {
    switch (action.type) {
        case 'SET_WORKOUT': {
            return {
                ...state,
                ...action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
