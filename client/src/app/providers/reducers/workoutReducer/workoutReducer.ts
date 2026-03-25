import type { WorkoutAction, WorkoutStateProps } from '../../../../entities';
import { workoutInitialState } from './workoutState';

export const workoutReducer = (
    state: WorkoutStateProps = workoutInitialState,
    action: WorkoutAction,
): WorkoutStateProps => {
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
