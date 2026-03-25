import type { WorkoutAction, WorkoutStateProps } from '../../../../entities';
import { ACTION_TYPE } from '../../../constants';
import { workoutInitialState } from './workoutInitialState';

export const workoutReducer = (
    state: WorkoutStateProps = workoutInitialState,
    action: WorkoutAction,
): WorkoutStateProps => {
    switch (action.type) {
        case ACTION_TYPE.SET_WORKOUT: {
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
