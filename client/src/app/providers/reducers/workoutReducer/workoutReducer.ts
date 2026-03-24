// import type { WorkoutAction } from './type';
import type { WorkoutAction } from '../../../../pages';
import type { WorkoutStateProps } from './type';
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
